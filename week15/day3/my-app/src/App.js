import {useState, useEffect} from 'react';
import About from './components/About';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(()=> {
    console.log(count+10)
  },[count])

  return (
    <div className="App">
      <h1>HI</h1>
      <button onClick={()=> setCount(count+1)}>+</button>
      {count}
      <button  onClick={()=> setCount(count-1)}>-</button>
      <About />
    </div>
  );
}

export default App;
