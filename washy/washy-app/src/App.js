import React, { useState, useEffect } from 'react';

import dayjs from 'dayjs';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Tasks from './components/Tasks';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Objectives from './components/Objectives';
import ProfileCard from './components/usables/ProfileCard';
import Footer from './components/Footer';
import {Routes, Route, useNavigate} from 'react-router-dom';
import './App.css';

export const context = React.createContext();


function App() {
  const [accessToken, setAccessToken] = useState('');
  const [tasks, setTasks] = useState([]);
  const [userData, setUserData] = useState({});
  const [updateProfileScore, setUpdateProfileScore] = useState(false);
  //**************************************** */
  const [username, setUsername] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [userId, setUserId] = useState(0);
  //*************************************** */
  const [isComplete, setIsComplete] = useState(false);
  const [reFalse, setReFalse] = useState(false);
  const [doneForToday, setDoneForToday] = useState([]);
  const [countTo, setCountTo] = useState('');
  const [timesUp, setTimesUp] = useState(false);
  const [weeklyScoreTarget, setWeeklyScoreTarget] = useState(3500);
  const [combinedScore, setCombinedScore] = useState(0);

  const navigate = useNavigate();

  useEffect(()=>{
    const year = new Date().getFullYear();
    let month = new Date().getMonth()+1;
    month = month <10 ? '0' +month : month
    let day = new Date().getDate();
    day = day < 10 ? '0' +day : day
    setCountTo(dayjs(`${year}-${month}-${day} 21:00:00`).valueOf());
    
  },[])
  
  const fetchData = async() => {
   
    await fetch(`https://washytom.herokuapp.com/api/tasks/all/${userId}`)
    .then(res =>res.json())
    .then(data=> {
        setTasks(data);
      data.forEach(element => {
        if (element.iscomplete === true){
          setDoneForToday([...doneForToday, element.iscomplete])
          
        }
      });
    })
    .catch(error=> {
        console.log(error);
    })
  };

  useEffect(()=> {
    console.log('at app.js', userId);
    if(userId > 0){
      fetchData()
    } else {
      navigate('/login');
    };
    
  },[userId]);

 

  useEffect(()=> {
    if(reFalse){
      fetchData()
    }
  },[reFalse]);
    
  
  return (
    <context.Provider value={{
            tasks,
            username,
            setUsername,
            userPassword,
            setUserPassword,
            userScore,
            setUserScore,
            userId,
            setUserId,
            updateProfileScore,
            setUpdateProfileScore, 
            setReFalse,
            setIsComplete,
            doneForToday,
            countTo,
            timesUp,
            setTimesUp,
            combinedScore, 
            setCombinedScore,
            weeklyScoreTarget,
            accessToken, 
            setAccessToken,
            userData, 
            setUserData
    }}>
        <Nav />  
        <ProfileCard />  
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/login' element={<Login title={'Login'}/>} />
              <Route path='/register' element={<Register title={'Register'}/>} />
              <Route path='/tasks' element={<Tasks />}/>
              {tasks?<Route path='/tasks/objectives/:task_id' element={<Objectives />}/>:null}
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
            </Routes>         
        <Footer />
    </context.Provider>   
  );
};

export default App;