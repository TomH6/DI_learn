import React from 'react';
import './App.css';
import User from './components/User';

// In A class componenet we need both render $ return. In A function, ONLY return 
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      name : 'Micheal',
      last_name : 'Jordan',
      jersy : '23'
    }
  }
  componentDidMount(){
    this.setState({name:"Larry",last_name:"Bird",jersy:"33"})
  }
  render(){
    console.log(this.state.name,this.state.last_name,this.state.jersy);
    return(
      <div className='App'>
        <header className='App-header'>
          <User name= {this.state.name} last_name= {this.state.last_name} jersy= {this.state.jersy}/>
        </header>
      </div>
    )
  }
}

export default App;