import React from 'react';
import './App.css';
import NameOne from './components/NameOne';
import NameTwo from './components/NameTwo';
import Button from './components/Button';
import Results from './components/Results';


class App extends React.Component {
  constructor(){
    super();
    this.state = {   
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Love-culator</h1>
          <NameOne />
          <NameTwo /> <br/>
          <Button />
          <Results />
        </header>
      </div>
    )
  } 
};
export default App;
