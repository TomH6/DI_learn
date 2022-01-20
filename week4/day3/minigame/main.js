let userNumber;
let computerNumber;
let guesses = 1;
const guessesMax = 3;


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
        alert("Sorry Not a number, Goodbye");
     }else if (userNumber < 0 || userNumber >= 11){
             alert("Sorry it's not a good number, Goodbye");
        } else {
             computerNumber = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
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
                    alert("WINNER!!");
                    console.log(`The computer chose ${computerNumber}`)
                    guesses = 1;
                break;
            case 1: alert("Your number is bigger then the computer's, guess again");
                    guesses++;
                    
                    tryAgain(computerNumber);
                break;
            case 2: alert("Your number is smaller then the computer's, guess again");
                    guesses++;
                    
                    tryAgain(computerNumber);
                break;
                
        }
    } else {
        guesses = 1;
        console.log (`number of guesses : ${guesses}`);
        alert(`Out of luck. By the way, the right number was ${computerNumber}`);

        
        
    }
}
function tryAgain(){ 
    userNumber = parseInt(prompt("Try again"));
    console.log(`Your number is: ${userNumber}`);
    console.log (`number of guesses : ${guesses}`); 
    if (userNumber === computerNumber){
        alert("WINNER!!");
        guesses =1;
    } else {
        test();
    }
}

// function checkIfNumberAgain(){
//     if (Number.isInteger(secondTry) == false){ 
//         alert("Sorry Not a number, Goodbye");
//     }else if (secondTry < 0 || secondTry >= 11){
//              alert("Sorry it's not a good number, Goodbye");
//         } else {
//             return secondTry;
//           }
// }
