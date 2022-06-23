import { useEffect, useContext } from "react";
import { context } from "../App";
import { Link } from 'react-router-dom';
import TaskCard from './usables/TaskCard';

const Tasks = (props) => {
    const {fakeUserID, combinedScore, setCombinedScore ,weeklyScoreTarget} = useContext(context);

    useEffect(()=>{
        const getUserCombinedScore = async() => {
            try {
                const res = await fetch(`http://localhost:2222/api/users/total/${fakeUserID}`);
                const data = await res.json();
                setCombinedScore(data[0].combined_score)
            } catch (e) {
                console.log(e);
            }
        }
        getUserCombinedScore()
    },[])

    function refreshAt(hours, minutes, seconds) {
        var now = new Date();
        var then = new Date();
        var dayUTC = new Date();
    
            if(now.getUTCHours() > hours ||
           (now.getUTCHours() == hours && now.getUTCMinutes() > minutes) ||
            now.getUTCHours() == hours && now.getUTCMinutes() == minutes && now.getUTCSeconds() >= seconds) {
            then.setUTCDate(now.getUTCDate() + 1);
            }
        
            then.setUTCHours(hours);
            then.setUTCMinutes(minutes);
            then.setUTCSeconds(seconds);
    
    
            var timeout = (then.getTime() - now.getTime());
            setTimeout(function() { window.location.reload(true); }, timeout);
        
    }
    refreshAt(18,0,30); //Will refresh page at 21:00 and 30sec, daily.
    
    return(
        <>
        {
            combinedScore === weeklyScoreTarget
            ?
            <div style={{display:"flex", flexDirection:'column', alignItems:"center"}}>
                <h2>AWESOME!!</h2>
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

