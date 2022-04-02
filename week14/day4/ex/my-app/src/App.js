import React from 'react';
import './App.css';
import Car from './components/Car';
import Events from './components/Events';
import Phone from './components/Phone';
import Color from './components/Color';


// In A class componenet we need both render & return. In A function, ONLY return 
class App extends React.Component {
  constructor(){
    super()
  }
  componentDidMount(){
    
  }
  render(){
    const carinfo = {name: "Ford", model: "Mustang"};
    return(
      <div className='App'>
        <header className='App-header'>
          {/* <Car name={carinfo.name} model={carinfo.model}/>
          <Events /> */}
          {/* <Phone /> */}
          <Color />
        </header>
      </div>
    )
  }
}

export default App;
