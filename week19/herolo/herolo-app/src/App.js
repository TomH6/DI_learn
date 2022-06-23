import React, { useState } from 'react';
import AutoCompleteText from './components/AutoCompleteText';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import './App.css';

export const AppContext = React.createContext(null);

function App() {
  const [currentWeather, setCurrentWeather] = useState([]);
  const [city, setCity] = useState('');
  const [ cityKey, setCityKey] = useState('');

  return (
      <AppContext.Provider value={{
        currentWeather, 
        setCurrentWeather, 
        city, 
        setCity,
        cityKey,
        setCityKey}}>
        <div className='App'>
          <AutoCompleteText />
          <CurrentWeather />
          <Forecast />
        </div> 
      </AppContext.Provider>
  )
};

export default App;