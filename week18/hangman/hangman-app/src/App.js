import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Figure from './components/Figure';
import Wrong from './components/Wrong';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import { showNotification as show } from './utils/utils';

const words = ['summers',
               'perry',
               'frusciante',
               'mcLaughlin',
               'slash',
               'fripp',
               'blackmore',
               'greenwood',
               'knopfler',
               'morello',
               'prince',
               'zappa',
               'santana',
               'gilmour',
               'harrison',
               'page',
               'clapton',
               'hendrix'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  // useEffect(()=> {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
  //       'X-RapidAPI-Key': '98f125d5b7msh9bdd34de829532bp1e6f64jsnf26a1afb2647'
  //     }
  //   };
    
  //   fetch('https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf', options)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => console.error(err));
  // },[])

  useEffect(()=> {
    const handleKeyDown = e => {
      const {key, keyCode} = e;
        if (playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
    
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters(correctLetters => [...correctLetters, letter]);
            } else {
              show(setShowNotification)
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              setWrongLetters(wrongLetters => [...wrongLetters, letter]);
            } else {
              show(setShowNotification)
            }
          }
        }
    }
    window.addEventListener('keydown', handleKeyDown);

    return ()=> window.removeEventListener('keydown', handleKeyDown);
  },[correctLetters, wrongLetters, playable])
 
  function playAgain() {
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    const random = Math.floor(Math.random()*words.length);
    selectedWord = words[random];
  }

  return (
    <div className="App">
      <Header />
      <div className='game-container'>
        <Figure wrongLetters={wrongLetters}/>
        <Wrong wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup 
        correctLetters={correctLetters} 
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification}/>
    </div>
  );
} 

export default App;
