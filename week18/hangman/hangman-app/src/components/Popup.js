import React, {useEffect} from 'react';
import { checkForWin } from '../utils/utils';

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
    let finalMsg = '';
    let revealWord = '';
    let playable = true;

    if(checkForWin(correctLetters, wrongLetters, selectedWord) === 'win'){
        finalMsg = 'Congratulations! You did it! 😃';
        playable = false;
    } else if (checkForWin(correctLetters, wrongLetters, selectedWord) === 'lose'){
        finalMsg = 'Better luck next time... 😕';
        revealWord = `The word was: ${selectedWord}`;
        playable = false;
    }
    useEffect(()=> {
        setPlayable(playable)
    });
  return(
    <div className="popup-container" style={finalMsg !== "" ? {display:'flex'} : {}}>
        <div className="popup">
        <h2>{finalMsg}</h2>
        <h3>{revealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
        </div>
    </div>
    )
}

export default Popup;