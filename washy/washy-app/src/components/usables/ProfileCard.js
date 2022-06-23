import { useState, useEffect, useContext } from 'react';
import { context } from "../../App";
import axios from 'axios';
import './ProfileCard.css';
import CountdownTimer from './CountdownTimer.js';

const ProfileCard = (props) => {
    
    const [profileName, setProfileName] = useState("");
    const [profileScore, setProfileScore] = useState("");
    const {
          userId,
          updateProfileScore, 
          setUpdateProfileScore, 
          doneForToday, 
          countTo
    } = useContext(context);

  useEffect(() => {
    const profileData = async () => {
        try {
          const res = await axios.get(`https://washytom.herokuapp.com/api/users/${userId}`);
          console.log('propfile res', res);
          setProfileScore(res.data[0].score);
          setProfileName(res.data[0].username);
          setUpdateProfileScore(false);
          console.log('ups', updateProfileScore);
        }
        catch (error) {
          console.log('profileCard error',error);
        }
      };
    profileData();
  }, [updateProfileScore, userId]);

  return (
   <>
   {
    !userId
    ? null
    :
   <div>
      <div className="profileCard">
        <div>
          <h1>{profileName}</h1>
        </div>
        <div>
          <p className="title">You've earned</p>
          <p className="title">{profileScore}/500 points today!</p>
        { (doneForToday.length > 0)
          ? <CountdownTimer countdownTimestampMs={countTo} />
          : null
        }
        </div>
      </div>
    </div>
    }
   </> 
  );
}
export default ProfileCard;