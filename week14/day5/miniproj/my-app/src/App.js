// import logo from './logo.svg';
import React from 'react';
import Box from './componenets/Box';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
  }
  render(){

    return (
      <div className="App">
        <header className="App-header">
          <Box />
        </header>
      </div>
    );
  }
}
export default App;
