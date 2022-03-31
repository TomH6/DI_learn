import './App.css';
import React from 'react';
import Withoutjsx from './components/Withoutjsx';
import Hello from './components/Hello';
import UserFavoriteColors from './components/UserFavoriteColors';
import Exercise4 from './components/Exercise4';


const user= {
  first_name: "Bob",
  last_name: "Dylan",
  fav_animals : ["Horse","Turtle","Elephant","Monkey"]
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* <Withoutjsx />
          <Hello />  
          <h3>{user.first_name}</h3>
          <h3>{user.last_name}</h3> 
          <UserFavoriteColors animals = {user.fav_animals}/>  */}
          <Exercise4 />   
        </div>
      </header>
    </div>
  );
}

export default App;