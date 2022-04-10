import Home from './components/home';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      page : 'home'
    }
  }
  navigateTo = (pageToNavigate)=> {
    this.setState({page:pageToNavigate})
  }
  render(){
    switch (this.state.page) {
      case 'home':
        return(
          <>
          <button onClick={()=>this.navigateTo('home')}>Home</button>
          <button onClick={()=>this.navigateTo('about')}>About</button>
          <button onClick={()=>this.navigateTo('contact')}>Contact</button>
          <Home />
          </>
        );
      case 'about':
      return(
        <>
        <button onClick={()=>this.navigateTo('home')}>Home</button>
        <button onClick={()=>this.navigateTo('about')}>About</button>
        <button onClick={()=>this.navigateTo('contact')}>Contact</button>
        <About />
        </>
      );
      case 'contact':
      return(
        <>
        <button onClick={()=>this.navigateTo('home')}>Home</button>
        <button onClick={()=>this.navigateTo('about')}>About</button>
        <button onClick={()=>this.navigateTo('contact')}>Contact</button>
        <Contact />
        </>
      );
      default:
        return(
          <><Home /></>
        )
        
    }
    // return (
    //   <>
     
    //     {/* <Nav />
    //       <Routes>
    //         <Route path='/' element={<Home/>}/>
    //         <Route path='/home' element={<Home/>}/>
    //         <Route path='/about' element={<About/>}/>
    //         <Route path='/contact' element={<Contact/>}/>
    //       </Routes> */}
    //   </>
    // );
  }
  
}
export default App;
