//EX1
//Create a function called infoAboutMe() that takes no parameter.
//The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
//Call the function.

function infoAboutMe(){
    console.log("My name is Tom. I like Tacos And Borritos");
}

infoAboutMe()

/*Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
Call the function twice with the following arguments:
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")*/

function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log(`You're name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}.`);
}

infoAboutPerson('David', 45, 'blue');
infoAboutPerson('Josh', 12, 'yellow');

//EX2
//Create a function named calculateTip() that takes no parameter.
//Inside the function, ask John for the amount of the bill.
//If the bill is less than $50, tip 20%.
//If the bill is between $50 and $200, tip 15%.
//If the bill is more than $200, tip 10%.

function calculateTip(){
   let bill = parseInt(prompt('John, what was the amount of the bill?'));
   let tip = 0;
   if (bill < 50) {
       tip = bill*0.2;
   } else if (bill <= 200) {
       tip = bill*0.15;
   } else {
       tip = bill*0.1
   }
   console.log(bill + tip);
}
calculateTip();

//EX3
//In the function, loop through numbers 0 to 500.
//Console.log all the numbers divisible by 23.
//At the end, console.log the sum of all numbers that are divisible by 23.

let divArray = [];
function isDivisible(){
    for (let i = 1; i <= 500; i++) {
        if (i % 23 == 0) {
            console.log(i);
            divArray.push(i);
        }
    }
}
isDivisible();
console.log(divArray.length);


//EX4
let shoppingList = ['banana', 'orange', 'apple'];
let stock = { 
    "banana": 6,
    // "falafel": 2, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

function myBill(){
    let fruitSum = 0;
    for (let i = 0; i < shoppingList.length; i++){
        if (stock[shoppingList[i]]>0){  //the item must be in stock
            stock[shoppingList[i]]--;
            fruitSum += prices[shoppingList[i]]; //get and store price in varubale 
                
        }    
    }   
    return fruitSum; 
}   
   console.log(myBill());
   console.log(stock); 




//EX5
let changeIndex = {
    quarter : 0.25,
    dime : 0.10,
    nickel : 0.05,
    penny : 0.01
    }

function changeEnough(itemPrice, amountOfChange){
    let changeValue = (amountOfChange[0]*changeIndex.quarter) +
                      (amountOfChange[1]*changeIndex.dime) + 
                      (amountOfChange[2]*changeIndex.nickel) +
                      (amountOfChange[3]*changeIndex.penny);
    if (changeValue >= itemPrice) {
        return true;
    } else {
        return false;
    }
};
console.log(changeEnough(4.25, [25, 20, 5, 0])) ;
console.log(changeEnough(14.11, [2,100,0,0])) ;
console.log(changeEnough(0.75, [0,0,20,5])) ;

//EX6
    function hotelCost(){
        let totalCost = 0;
        let duration = "";
        do {
            duration = prompt("How many nights would you like to stay for?");
        } while(!isNumber(duration));

        function isNumber() {
            let containsOnlyDigits = /^[0-9]+$/; // one or more of digits 0 to 9
            return containsOnlyDigits.test(duration);
        } 
        return totalCost = (`${duration*140}$`);
    }
//  console.log(hotelCost());

 function planeRideCost(){
     let destination = "";
     do {
         destination = prompt("Where would you like to travel to?");
     } while(!isString(destination));

     function isString(){
         let containsOnlyLetters = /^[a-z+A-Z+" "]+$/;
         return containsOnlyLetters.test(destination);
     }
     if (destination == "London"){
         return 'London: 183$'
     } else if (destination == "Paris"){
         return 'Paris: 220$'
     } else {
         return 'All other destinations: 300$'
     }
     
 }
//  console.log(planeRideCost());

 function rentalCarCost(){
    let totalRentCost = 0;
    let durationOfRent = "";
    do {
        durationOfRent = prompt("How many nights would you like to rent a car for?");
    } while(!isNumber(durationOfRent));

    function isNumber() {
        let containsOnlyDigits = /^[0-9]+$/; // one or more of digits 0 to 9
        return containsOnlyDigits.test(durationOfRent);
    } 
    if (durationOfRent > 10) {
        return totalRentCost = (`${durationOfRent*40}`)-(`${durationOfRent*40}`*0.05); 
    } else {
    return totalRentCost = (`${durationOfRent*40}$`);
    }
 }
 
//  console.log(rentalCarCost());

 function totalVacationCost(){
     vacationCostTotal =
    `The hotel costs ${hotelCost()},
    the plane ride to ${planeRideCost()}, 
    And the car rental is ${rentalCarCost()}.`;
     return vacationCostTotal;
     
 }
 
console.log(totalVacationCost()) ;








