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
import {Routes, Route} from 'react-router-dom';
import './App.css';

export const context = React.createContext();

function App() {
  const [tasks, setTasks] = useState([]);
  const [updateProfileScore, setUpdateProfileScore] = useState(false);
  const [fakeUserID, setFakeUserID] = useState(10);
  const [isComplete, setIsComplete] = useState(false);
  const [reFalse, setReFalse] = useState(false);
  const [doneForToday, setDoneForToday] = useState([]);
  const [countTo, setCountTo] = useState('');
  const [timesUp, setTimesUp] = useState(false);
  const [weeklyScoreTarget, setWeeklyScoreTarget] = useState(3500);
  const [combinedScore, setCombinedScore] = useState(0);

  useEffect(()=>{
    const year = new Date().getFullYear();
    let month = new Date().getMonth()+1;
    month = month <10 ? '0' +month : month
    let day = new Date().getDate();
    day = day < 10 ? '0' +day : day
    setCountTo(dayjs(`${year}-${month}-${day} 21:00:00`).valueOf());
    console.log(`${year}-${month}-${day} 21:00:00`);
  },[])
  
  const fetchData = async() => {
    // console.log('refalse:', reFalse);
    await fetch('http://localhost:2222/api/tasks/')
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
    fetchData()
  },[]);

  useEffect(()=> {
    if(reFalse){
      fetchData()
    }
  },[reFalse]);
    

  return (
    <context.Provider value={{
            tasks,
            fakeUserID,
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
            weeklyScoreTarget
    }}>
        <Nav />  
        <ProfileCard />  
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/sign-up' element={<Register />} />
              <Route path='/log-in' element={<Login />} />
              <Route path='/tasks' element={<Tasks />}/>
              <Route path='/tasks/objectives/:task_id' element={<Objectives />}/>
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
            </Routes>         
        <Footer />
    </context.Provider>   
  );
};

export default App;