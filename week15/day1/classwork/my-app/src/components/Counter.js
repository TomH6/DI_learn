import React from 'react';

class Counter extends React.Component {
  constructor(){
    super();
    this.state = {
      counter : 0
    }
  }
  add =()=>{
    this.setState({counter : this.state.counter +1})
  }
  render(){
    if(this.state.counter >= 5){
      throw Error ('oh no. we crashed :( ')
    }
    return(
        <div id='counter'>
          <button id='btn' onClick={this.add}>Click Here</button>
          {this.state.counter}
        </div> 
        
         
    )
  }
}

export default Counter;