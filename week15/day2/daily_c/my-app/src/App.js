import React from 'react';
import './App.css';
import Form from './components/Form';

// In A class componenet we need both render & return. In A function, ONLY return 
class App extends React.Component {
  constructor(){
    super()
  }
  componentDidMount(){
    
  }
  render(){
   
    return(
      <div className='App'>
        <header className='App-header'>
        <Form />
        </header>
      </div>
    )
  }
}

export default App;
