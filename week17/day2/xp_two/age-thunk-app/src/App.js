import React from 'react';
import { connect } from 'react-redux';
import {ageUp, ageDown} from './redux/actions';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      age : 21
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <span>{this.props.age}</span>
            <div>
              <button onClick={this.props.ageUp}>Age Up</button>
              <button onClick={this.props.ageDown}>Age Down</button>
            </div>
          </div>
        </header>
      </div>
    );
  } 
}

const mapStateToProps = (state) => {
  return{
    age : state.age
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    ageUp : ()=> dispatch(ageUp()),
    ageDown : ()=> dispatch(ageDown())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
