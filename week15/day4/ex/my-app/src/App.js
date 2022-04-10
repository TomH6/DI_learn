import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import NavBar from './components/NavBar';
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



class App extends React.Component {
  constructor(){
    super(); 
  }
  render(){
    return(
        <>
        <NavBar />

        <ErrorBoundary>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/shop' element={<ShopScreen/>} />
            <Route path='/profile' element={<ProfileScreen/>} />
          </Routes>
        </ErrorBoundary>

        <PostList />

        <Example1 />
        <Example2 />
        <Example3 />
        </>
    )
  }
}
export default App;
