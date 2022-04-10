import React from 'react';

import Home from './components/Home';
import ProfileScreen from './components/ProfileScreen';
import ShopScreen from './components/ShopScreen';
import ErrorBoundary from './components/ErrorBoundary';
import PostList from './components/PostList';
import Students from './components/Students.json';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';
import BigJson from './data.json';

import { BrowserRouter, Switch, Route, Routes, NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

class App2 extends React.Component {
  constructor(){
    super(); 
  }
  render(){
    const medias = BigJson.SocialMedias;
    const skills = BigJson.Skills[0].SkillSet;
    const skillset = BigJson.Skills[1].SkillSet;
    const exp = BigJson.Experiences[0];
    const exp1 = BigJson.Experiences[1];
    console.log(exp);

    return(
    <>
      <>
        {/* <>
          <NavLink to='/'>Home</NavLink> |
          <NavLink to='/profile'>Profile Screen</NavLink> |
          <NavLink to='/shop'>Shop Screen</NavLink>
        </>

          <ErrorBoundary>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/home' element={<Home />}/>
                <Route path='/profile' element={<ProfileScreen />}/>
                <Route path='/shop' element={<ShopScreen error='error'/>}/>
            </Routes>
          </ErrorBoundary> */}
      </>
      <>
      {/* <h1>Hi This is A title</h1> <br/>
          {
          Students.map(item => {
            return(
                <PostList Students={item} key={item.id} />
            )
          })
        }     */}
      </>
      <>
      {/* {
        medias.map(media => {
          console.log(media);
          return(
            <Example1 item={media} /> 
          )
        })
        
      } */}
      </>
      <>
      {/* <h3>Programing languages</h3>   <br />*/}
      </>
      <>
      {/* {
        skills.map(skill => {
          console.log(skill.Name);
          return(
            <>
            <Example2 item={skill.Name} />
            </>
          )
        })
      } */}
      </>
      <>
      <h3>Web-based Application Development</h3> <br />
      </>
      <>
      {
        skillset.map(skill => {
          // console.log(skill.Name);
          return(
            <>
            <Example2 item={skill.Name} />
            </>
          )
        })
      }
      </>
      <>
      {
        exp.map(skill => {
          console.log(skill.Name);
          return(
            <>
            <Example3 item={skill.Name} />
            </>
          )
        })
      }
      </>
      
    </>
    )
  }
}
export default App2;
