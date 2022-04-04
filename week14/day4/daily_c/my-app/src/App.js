// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Card from './components/Card';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      languages : [
          {name: "Php", votes: 0},
          {name: "Python", votes: 0},
          {name: "JavaScript", votes: 0},
          {name: "Java", votes: 0}
      ]
  }
  }
  render(){
    
    return(
      <div className='App'>
        <header className='App-header'>
          <div>
            <Card name={this.state.languages[0].name} />
            <Card name={this.state.languages[1].name} />
            <Card name={this.state.languages[2].name} />
            <Card name={this.state.languages[3].name} />
          </div>
        </header>
      </div>
    )
  }
}

export default App;
