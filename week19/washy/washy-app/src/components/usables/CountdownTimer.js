import {useState, useEffect, useContext} from 'react';
import { context } from "../../App";
import {getRemainingTimeUntilMsTimestamp} from '../Utils/CountdownTimerUtils.js';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
};

const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
    // const {setTimesUp} = useContext(context);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    
    return(
        <div>
            <span>Time Remaining:</span>
            <div>
                <span className="title">
                    {`${remainingTime.hours}h:${remainingTime.minutes}m:${remainingTime.seconds}s`}
                </span>
            </div>
        </div>
    )
};

export default CountdownTimer;