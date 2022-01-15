//  EX1
//Write some simple Javascript code that will join all the items in the array above, and console.log the result.

let me = ["my","favorite","color","is","blue"];
console.log(me[0],me[1],me[2],me[3],me[4]);

// EX2
//Create 2 variables. The values should be strings.
let string1 = 'James';
let string2 = 'Bond';
//Slice out and swap the first 2 characters of the 2 strings from part 1.
let newWord = string2.slice(0,2)+string1.slice(-3)+" "+string1.slice(0,2)+string2.slice(-2);
console.log(newWord);

//EX3
//Prompt the user for the first number
let x = prompt("Pick A number", "");
//Store the first number in a variable called num1
let num1 = parseInt(x);
//Prompt the user for the second number
let y = prompt("Pick another number", "");
let num2 = parseInt(y);
alert(num1+num2);







