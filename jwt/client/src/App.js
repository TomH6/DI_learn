import Home from './components/Home';
import About from './components/About';
import LoginRegister from './components/LoginRegister';
import Nav from './components/Nav';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import {useState, useEffect, useContext, createContext} from 'react';

export const AppContext = createContext(null);

function App() {
  const [accessToken, setAccessToken] = useState('');

  return (
    <AppContext.Provider value={{accessToken, setAccessToken}}>
    <div className="App">
      <Nav />
        <Routes>
          <Route path='/login' element={<LoginRegister title='login'/>} />
          <Route path='/register' element={<LoginRegister title='register'/>} />
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
    </div>
    </AppContext.Provider>
  );
}

export default App;
