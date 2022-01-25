let userNumber;
let computerNumber;
let guesses = 1;
const guessesMax = 3;
const noNumber = "Sorry Not a number, Goodbye";
const noGood = "Sorry it's not a good number, Goodbye"; 
const winner = "WINNER!!";
const tooBig = "Your number is bigger then the computer's, guess again";
const tooSmall = "Your number is smaller then the computer's, guess again";
const tooBad = "Sorry it's not a good number, Goodbye";



function playTheGame(){
    if (confirm("Do you want to play A game?")==false){
        alert("No problem, Goodbye");
    } else {
       userNumber = parseInt(prompt("Choose A number between 0 - 10")) ;
       console.log (`Your number is : ${userNumber}`);
       console.log (`number of guesses : ${guesses}`);
    }  checkIfNumber(); 
        
} 

function checkIfNumber(){
    if (Number.isInteger(userNumber) == false){ 
        alert(noNumber);
     }else if (userNumber < 0 || userNumber >= 11){
             alert(noGood);
        } else {
             computerNumber = Math.floor(Math.random() * 11);
            }
        test();   
}

function test(user,computer){
    let outcome = [
                   userNumber === computerNumber,
                   userNumber>computerNumber,
                   userNumber<computerNumber
                                            ];
    if (guesses < guessesMax){
        switch(outcome.indexOf(true)){
            case 0: 
                    alert(winner);
                    console.log(`The computer chose ${computerNumber}`)
                    guesses = 1;
                break;
            case 1: alert(tooBig);
                    guesses++;
                    
                    tryAgain(computerNumber);
                break;
            case 2: alert(tooSmall);
                    guesses++;
                    
                    tryAgain(computerNumber);
                break;
                
        }
    } else {
        guesses = 1;
        console.log (`number of guesses : ${guesses}`);
        alert(tooBad);   
    }
}
function tryAgain(){ 
    userNumber = parseInt(prompt("Try again"));
    console.log(`Your number is: ${userNumber}`);
    console.log (`number of guesses : ${guesses}`); 
    if (userNumber === computerNumber){
        alert(winner);
        guesses =1;
    } else {
        test();
    }
}

