import { useState, useEffect, useContext } from 'react';
import { context } from "../../App";
import axios from 'axios';
import './ProfileCard.css';
import CountdownTimer from './CountdownTimer.js';

const ProfileCard = (props) => {
    
    const [profileName, setProfileName] = useState("");
    const [profileScore, setProfileScore] = useState("");
    const {updateProfileScore, setUpdateProfileScore, doneForToday, countTo} = useContext(context);

  useEffect(() => {
    const profileData = async () => {
        try {
          const res = await axios.get("http://localhost:2222/api/users/10");
          // console.log('FakeUserInfo resDATA=>',res.data);
          setProfileScore(res.data[0].score);
          setProfileName(res.data[0].username);
          setUpdateProfileScore(false);
        }
        catch (error) {
          console.log(error);
        }
      };
    profileData();
  }, [updateProfileScore]);

  return (
    
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
  );
}
export default ProfileCard;