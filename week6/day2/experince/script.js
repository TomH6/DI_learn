//EX 1

//Analyse the code below, and predict what will be the value of a in all the following functions.
//Write your prediction as comments in a js file

// #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// }
// 3

//#2
// var a = 0;
// function q2() {
//     a = 5;
// }
// 5

// function q22() {
//     alert(a);
// }
// 0


//#3
// function q3() {
//     window.a = "hello"; 
// }
// "hello"



// function q32() {
//     alert(a);
// }
// is Not Defined


//#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }
// "test"

//#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// } 
// 5
// // alert(a);

//EX 2
let winBattle = ()=>true
let experiencePoints = winBattle()
?10
:1
console.log(experiencePoints);
// const winBattle = (experiencePoints) => {
//     console.log(experiencePoints)
//     return (experiencePoints 
//             ?10 
//             :1);  
// };
// console.log(winBattle(true));
// console.log(winBattle(false));
//Transform the winBattle() function to an arrow function
//Create a variable called experiencePoints
//Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints 
//variable should be equal to 10, else the variable should be equal to 1
//Console.log the experiencePoints variable


//EX 3
//Write a JavaScript arrow function that checks whether the value of the argument passed, 
//is a string or not. Use ternary operator
//Check out the example below to see the expected output
let isString = (toTest) => typeof toTest==="string"
// const isString = (el) => {
//     return( /^[a-zA-Z]+$/.test(el) ?true :false)
// }
console.log(isString('hello'));
console.log(isString([1, 2, 4, 0]));

//EX 4
//Write a JavaScript program that displays the colors in the following order : 
// “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
//Check if at least one element of the array is equal to the value “Violet”. 
//If yes, console.log("Yeah"), else console.log("No...")
//Hint : Use the array methods taught in class. Look at the lesson Array Methods.

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// *******FOR EACH*********
colors.forEach (function (e, i){
    console.log(`${[i+1]}# choise is ${[e]}`)
}) 
console.log((colors.includes("Violet") ?"YEAH!!" :"No.."))


// *******FOR LOOP*********
// const positionColor = (e) =>{
//     for (let i = 0; i < colors.length-1; i++) {
//            console.log(`${[i+1]}# choise is ${colors[i+1]}`)
//     } console.log((colors.includes("Violet") ?"YEAH!!" :"No.."))
// }
// positionColor()

//EX 5
//Write a JavaScript program that displays the colors in the following order : 
//“1st choice is Blue.” “2nd choice is Green.” “3rd choice is Red.” ect…
//Hint : Use the array methods taught in class and ternary operator.
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];

color.forEach ((e, i)=>{
      (i > 2 
        ?console.log(`${i+1}${ordinal[0]} choise is ${e}`)
        :console.log(`${i+1}${ordinal[i+1]} choise is ${e}`))
}) 

//EX 6
// let bankAmount = 20000;
// let vatIncluded;
// let expenses = ["+200", "-100", "+146", "+167", "-2900"];
// const addVatToExpense = () => {
//     expenses.forEach(function (exp){
//        let expense = parseInt(exp) 
//         vatIncluded = expense + expense*0.17;
//         bankAmount += vatIncluded;
//         // console.log(expense)
//         // console.log(vatIncluded)
//         // console.log(bankAmount)
//         return bankAmount;
//     })
// }
// addVatToExpense()
// console.log(bankAmount)

//******BETTER WAY *******//

let bankAmount = 20000;
const vat = 0.17;
let details = [+200, -100, +146, +167, -2900];
let detailsVatIncluded = details.map((expense=>expense*(1+vat)));
bankAmount = detailsVatIncluded.reduce((prev, curr)=>prev+curr,bankAmount)
console.log(bankAmount);


