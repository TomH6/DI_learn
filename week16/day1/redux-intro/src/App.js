import React  from 'react';
import { connect } from 'react-redux';
import Child from './components/Child';
import './App.css';
import { changePropOne, clickOnAButton } from './redux/actions';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      propOne: 'one',
      propTwo: 'two'
      // propThree: 'three'
    }
  };
  handleChange = (e) => {
    this.setState({propOne:e.target.value})
  };
  render(){
    return (
      <div className="App">
          <header className="App-header">
          <div>{this.state.propOne}</div>
          <div>{this.state.propTwo}</div>
          <div>{this.state.propThree}</div>
          <div>
            <input type='text' onChange={this.props.handleInput} />
          </div>
          <div>{this.props.a}</div>
          <div>{this.props.b}</div>
          <div>{this.props.c}</div>
          <button onClick={this.props.clickMe}>Click Me</button>
          <Child />
        </header>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return{
    a: state.propOne,
    b: state.propTwo,
    c: state.propThree
  }
};
const mapDispatchToProps =(dispatch) => {
  return{
    handleInput: (e)=> dispatch(changePropOne(e.target.value)),
    clickMe: ()=> dispatch(clickOnAButton())
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);