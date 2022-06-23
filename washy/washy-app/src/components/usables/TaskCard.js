import React, {useContext} from 'react';
import { context } from "../../App";
import '../usables/taskCard.css';
import { Link, useNavigate } from 'react-router-dom';


const TaskCard = (props) => {
    
    const {tasks, doneForToday, setUserId} = useContext(context);
    const navigate = useNavigate(); 

    const handleClick = () => {
        setUserId('');    
        navigate('/home');
    }

    return(
        <div className='body'>    
        {
            doneForToday.length == tasks.length && tasks.length > 0
            
            ?
                <div style={{display:"flex",flexDirection:'column', alignItems:"center"}}>
                    <h2 >Amazing!</h2>
                    <h2>You are all done for today!</h2>
                    <h3>Come back tommorrow for more tasks!</h3>
                    <button className='button' onClick={(e)=>handleClick(e)}><Link to={'/logout'}>LOG OUT</Link></button>
                </div>
            :
            tasks.map(card => {
                return(
                    <div className={tasks[card.id-1].iscomplete === true ? "card_disable" : "card"} key={card.id} style={{backgroundImage: `url(${card.img})`}}>
                        <div className='card-content'>
                            <h2 className='card-title'>{card.task}</h2>
                            <p className='card-body'>This task will earn you: <br/> {card.pointsworth} points</p>
                            <Link to={`/tasks/objectives/${card.id}`}> 
                                <button className='card_button'>Let's go <br/>{card.verb}</button>
                            </Link>
                        </div>
                    </div>
                )
            })
        } 
        </div>   
    )
};
export default TaskCard;

