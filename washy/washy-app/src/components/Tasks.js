import { useEffect, useContext } from "react";
import { context } from "../App";
import { Link } from 'react-router-dom';
import TaskCard from './usables/TaskCard';

const Tasks = (props) => {
    const {
           username,
           setUsername,
           userId,
           setUserId,
           userScore,
           setUserScore, 
           combinedScore, 
           setCombinedScore, 
           weeklyScoreTarget,
           
    } = useContext(context);
    

    useEffect(()=> {
        const getUserScore = async() => {
            try {
                const res = await fetch(`https://washytom.herokuapp.com/api/users/${userId}`);
                const data = await res.json();
                console.log('DATA', data);
                setUserId(data[0].id);
                setUserScore(data[0].score);
                setUsername(data[0].username);
            } catch (e) {
                console.log(e);
            }
        }
        getUserScore()
    },[])

    useEffect(()=>{
        const getUserCombinedScore = async() => {
            try {
                const res = await fetch(`https://washytom.herokuapp.com/api/users/total/${userId}`);
                const data = await res.json();
                console.log('get combined score', data);
                setCombinedScore(data[0].u_score)
                console.log('Points to reach', combinedScore);
            } catch (e) {
                console.log(e);
            }
        }
        getUserCombinedScore()
    },[]);

    // function refreshAt(hours, minutes, seconds) {
    //     let now = new Date();
    //     let then = new Date();
    
    //         if(now.getUTCHours() > hours ||
    //           (now.getUTCHours() == hours && now.getUTCMinutes() > minutes) ||
    //           now.getUTCHours() == hours && now.getUTCMinutes() == minutes && now.getUTCSeconds() >= seconds) {
    //           then.setUTCDate(now.getUTCDate() + 1);
    //         }
        
    //         then.setUTCHours(hours);
    //         then.setUTCMinutes(minutes);
    //         then.setUTCSeconds(seconds);
            
       
    //         const timeout = (then.getTime() - now.getTime());
    //         setTimeout(function() { window.location.reload(true); }, timeout);
    // }
    // refreshAt(18,0,30); //Will refresh page at 21:00 and 30sec, daily.
    
    return(
        <>
        {
            combinedScore === weeklyScoreTarget
            ?
            <div className="about_cont" style={{display:"flex", flexDirection:'column', alignItems:"center"}}>
                <h2>AWESOME {username}!!</h2>
                <h3>You did ALL your tasks</h3>
                <h3>ALL week long!</h3>
                <button className='button'><Link to={'/logout'}>LOG OUT</Link></button>
            </div>
            :
            <div>
                <h1 style={{display:"flex", justifyContent:"center"}}>Todays Tasks!</h1>
                <TaskCard />
            </div> 
        }
        </>      
    )
};

export default Tasks;

