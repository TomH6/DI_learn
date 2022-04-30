import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';

function App() {
  
  return (
        <>
         <Navbar />
          <Routes>
            <Route path ='/' element={<Home />} />
            <Route path ='/home' element={<Home />} />
            <Route path ='/about' element={<About />} />
            <Route path ='/contact' element={<Contact />} />
            <Route path ='/:post_id' element={<Post />} />
          </Routes>
        </>   
  );
}

export default App;
