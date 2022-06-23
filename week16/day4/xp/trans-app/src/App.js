import React from 'react';
import './App.css';
import TransactionList from './components/TransactionList';



class App extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <div className="App">
        {/* <header className="App-header"> */}
          <TransactionList />
        {/* </header> */}
      </div>
    );
  }
}

export default App
