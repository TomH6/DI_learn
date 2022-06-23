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
    const [totalUserSCORE, setTotalUserSCORE] = useState(0);
    const [wellDone, setWellDone] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const [sendToWeekly, setSendToWeekly] = useState(false);
    const [scoreToWeekly, setScoreToWeekly] = useState(0)
    const [addedUserScore, setAddedUserScore] = useState(0);

    const params = useParams();
    const task_id = params.task_id;
    const {tasks, userScore, userId, setUpdateProfileScore, setIsComplete, setReFalse, combinedScore} = useContext(context);

 
    useEffect(()=> {
        setReFalse(false);
    },[])

    useEffect(()=> {
        const getRelevantObjectives = async() => {
            try{
                const res = await fetch(`https://washytom.herokuapp.com/api/tasks/objectives/${task_id}`);
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
            setTotalUserSCORE(userScore + pointsEarnedFromTask)          
            setAddedUserScore(pointsEarnedFromTask)          
        } else {
            setJobDone(false)
        }    
    };
  

    const handleSubmit = async (e) => {
        e.preventDefault();
        //** UPDATE USER'S SCORE
        try {
            let response = await axios.put(`https://washytom.herokuapp.com/api/users/${userId}`,{   
                score: totalUserSCORE
            })
            const data = await response.data;
            setWellDone(true);
            setUpdateProfileScore(true);
            setIsFlipped(!isFlipped);
            setScoreToWeekly(totalUserSCORE)
            setSendToWeekly(true);
            
        } catch (err) {
            console.log('error=>', err);
        }

        try {
            let response = await axios.post(`https://washytom.herokuapp.com/api/users/total/${userId}`,{   
                combined_score: addedUserScore
            })
            const data = await response.data;
            console.log('weekly', data); 
        } catch (err) {
            console.log('error=>', err);
        }

        
        // get users progress where 
        //** UPDATE TAKS COMPLETE
        try {
            let response = await axios.post(`https://washytom.herokuapp.com/api/tasks/${task_id}/${userId}`,{   
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
                        <input className={!jobDone?'button_dis' :'button'} disabled={!jobDone} type='submit' name='submit' />
                        
                    </form>
                <Link to={`/tasks`}>
                    <p >back to tasks</p>                   
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