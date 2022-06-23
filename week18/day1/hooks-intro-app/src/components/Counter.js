import React, { useEffect, useState } from 'react';
import TestContext from './TestContext';
export const AppContext = React.createContext(null);

function Counter() {
  const [counter, setCounter] = useState(0);
//** useEffect is like componentDidMount or componentDidUpdate in the same function
  useEffect(()=>{

  },[])
  return (
    <div>
      <p>{counter}</p>
       {/*option 1*/}
      <button onClick={() => setCounter(prev => prev+1)}>+1</button>
       {/*option 2*/}
      <button onClick={() => setCounter(counter - 1)}>-1</button>
      <AppContext.Provider value={{counter, setCounter}}>
        <TestContext />
      </AppContext.Provider>
    </div>
  );
}
export default Counter;