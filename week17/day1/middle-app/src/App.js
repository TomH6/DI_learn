import React from 'react';
import Fname from './components/Fname';
import './App.css';

class App extends React.Component {
 
  render(){
    return (
       <div className="App">
         <header className="App-header">
           <Fname />
         </header>
       </div>
     );
  }
}

export default App;
