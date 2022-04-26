import React from 'react';
import './App.css';
import Counter from './components/Counter';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2>AsynCounter</h2>
            <Counter />
        </header>
      </div>
    );
  }
}

export default App;
