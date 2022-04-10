import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter:0
    }
  }
  add = () => {
    this.setState({counter: this.state.counter + 1})
  }
  render(){
    if(this.state.counter >= 5){
      throw Error('Crashed... :( ')
    }
    return(
      <>
        <button onClick={this.add}>Add</button>
        {
          this.state.counter
        }
      </>
    )
  }
}
export default Counter
