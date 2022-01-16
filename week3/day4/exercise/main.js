// Exercise 1: Simple If/Else Statement
//Create 2 variables, x and y. Each of them should have a different numeric value.
let x = 5;
let y = 2;
//Write an if/else statement that checks which number is bigger.
if (x>y){
    console.log('X is the bigger number');
}

//Exercise 2: Chihuahua
//Create a variable called newDog where it’s value is “Chihuahua”.
let newDog = 'Chihuahua';
//Check and display how many letters are in newDog.
console.log(newDog.length);
//Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
//Check if the variable newDog is equal to “Chihuahua”
//if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
//else, console.log ‘I dont care, I prefer cats’
if (newDog === 'Chihuahua'){
    console.log("I love Chihuahuas, it's my favorite dog breed")
} else {
    console.log("I dont care, I prefer cats")
};

//Exercise 3: Even Or Odd
//Prompt the user for a number and save it to a variable.
let z = prompt("Pick A number");
let num1 = parseInt(z);
//Check whether the variable is even or odd.
//If it is even, display: “x is an even number”. Where x is the actual number the user chose.
//If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.
if (num1 % 2 == 0){
    console.log("x is an even number")
} else {
    console.log("x is an odd number")
};

//Exercise 4: Group Chat
//


/*if (users.length === 0){
    console.log("no one is online")
} else if (users.length <= 2){
    console.log(users)
} else {
    console.log(users[0], users[1]  + ` and ${users.length-2} more are online`)
};*/
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
let whoIsOnline = users.length;

let options = [whoIsOnline == 0, whoIsOnline == 1, whoIsOnline == 2];

switch(options.indexOf(true)){
    case 0: 
        console.log("No one is online");
    break;
    case 1:
        console.log(`${users[0]} is online`);
    break;
    case 2:
        console.log(`${users[0]} and ${users[1]} are online`);
    break;
    default:
        console.log(`${users[0]}, ${users[1]}, and ${users.length-2} more are online`);
}