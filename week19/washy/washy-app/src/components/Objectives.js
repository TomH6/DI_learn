import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { context } from "../App";
import { Link, useParams } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';

const Objectives = (props) => {
    const [relevantObjectives, setRelevantObjectives] = useState([]);
    const [checkedState, setCheckedState] = useState([]);
    const [jobDone, setJobDone] = useState(false);
    const [pointsEarnedFromTask, setPointsEarnedFromTask] = useState(0);
    const [fakeUserSCORE, setFakeUserSCORE] = useState(0);
    const [totalUserSCORE, setTotalUserSCORE] = useState(0);
    const [wellDone, setWellDone] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const [sendToWeekly, setSendToWeekly] = useState(false);

    const params = useParams();
    const task_id = params.task_id;
    const {tasks,fakeUserID , setUpdateProfileScore, setIsComplete, isComplete, setReFalse, combinedScore} = useContext(context);

    useEffect(()=> {
        const getUserScore = async() => {
            try {
                const res = await fetch(`http://localhost:2222/api/users`);
                const data = await res.json();
                setFakeUserSCORE(data[0].score)
            } catch (e) {
                console.log(e);
            }
        }
        getUserScore()
    },[])

    useEffect(()=> {
        setReFalse(false);
    },[])

    useEffect(()=> {
        const getRelevantObjectives = async() => {
            try{
                const res = await fetch(`http://localhost:2222/api/tasks/objectives/${task_id}`);
                const data = await res.json();
                setRelevantObjectives(data);
            } catch (e) {
                console.log(e);
            }
        }
        getRelevantObjectives()
    },[])

    useEffect(()=>{
        for (let index = 0; index < relevantObjectives.length; index++) {
            checkedState[index] = false;          
        }
        setCheckedState([...checkedState])
        setPointsEarnedFromTask(tasks[task_id-1].pointsworth)
    },[])

    
    
    const handleOnChange = (e, index) => {
        checkedState[index] = e.target.checked;
          
        const filter = checkedState.filter(item => item === true)
        
        if(filter.length === relevantObjectives.length){
            setJobDone(true)
            setTotalUserSCORE(fakeUserSCORE + pointsEarnedFromTask)          
        } else {
            setJobDone(false)
        }    
    };
  

    const handleSubmit = async (e) => {
        e.preventDefault();
        //** UPDATE USER'S SCORE
        try {
            let response = await axios.put(`http://localhost:2222/api/users/${fakeUserID}`,{   
                score: totalUserSCORE
            })
            const data = await response.data;
            
            setWellDone(true);
            setUpdateProfileScore(true);
            setIsFlipped(!isFlipped);
            setSendToWeekly(true);
            
        } catch (err) {
            console.log('error=>', err);
        }
        
        //** UPDATE TAKS COMPLETE
        try {
            let response = await axios.put(`http://localhost:2222/api/tasks/${task_id}`,{   
                iscomplete: jobDone
            })
            const data = await response.data;
            // console.log("task data =>", data);
            setIsComplete(true);
            setReFalse(true);            
            
        } catch (err) {
            console.log('error=>', err);
        }
    }
    
    const sendWeeklyScore = async() => {
        //** UPDATE USER'S WEEKLY SCORE   
        try {
            let response = await axios.put(`http://localhost:2222/api/users/total/${fakeUserID}`,{   
                combined_score: totalUserSCORE + combinedScore - pointsEarnedFromTask
            })
            const data = await response.data;         
        } catch (err) {
            console.log('error=>', err);
        }
    };

    useEffect(()=> {
        sendWeeklyScore()
    },[sendToWeekly])

    
    return(
        <div className="main" style={{display:"flex", justifyContent:"center"}}>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className="frontCard" style={{border:'2px solid black',borderRadius:'1em' ,padding: '2em'}}>
                <h2>{tasks[task_id-1].task}</h2>
                <h3>Let's Do It!!</h3>
                <h5>In order for you to complete this task<br/> you must:</h5>
                    <form onSubmit={handleSubmit}>
                      {   
                        relevantObjectives.map((filteredObj, index) => {
                                return(
                                    <>
                                      <label key={index}>
                                        {filteredObj.objective}
                                        <input key={index}
                                               id={filteredObj.id}
                                               name={tasks[task_id-1].task}
                                               value={filteredObj.objective}
                                               type='checkbox'
                                               onChange={(e)=> handleOnChange(e, index)} />
                                      </label>
                                    </>
                                )
                            })
                        }
                        <p><input disabled={!jobDone} type='submit' name='submit' /></p>
                        
                    </form>
                <Link to={`/tasks`}>
                    <button className='button'>back to tasks</button>                   
                </Link>
            </div>

            <div className="backCard" style={{display:"flex",flexDirection:'column' ,justifyContent:"center"}}>
                <h1>Well Done!</h1>
                <p>You have completed the task and earned {pointsEarnedFromTask} points!</p>
                 <Link to={'/tasks'}>
                     <p>Go back and see your other tasks</p>
                 </Link> 
            </div>
        </ReactCardFlip>
        </div>
    )
};
export default Objectives;