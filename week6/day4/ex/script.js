//EX1
//Create a one line function (ie. an arrow function) that receives two numbers as 
//parameters and returns the sum.
const addTwoNums = (a, b) => (a + b);
console.log(addTwoNums(60,10)) 

//EX2
//Create a function that receives a weight in kilograms and returns it in grams.
//First, use function declaration and invoke it.
const KiloToGrams = (kilo) => (kilo*1000);
console.log(KiloToGrams(66));
//Then, use function expression and invoke it.
(function(kilo){console.log(kilo*1000)}(33));  
(kilo => console.log(kilo*1000))(33);
//Write in a one line comment, the difference between function declaration and function expression.

/* Function expressions allow us to create anonymous functions. they can also be self invoked*/

//Finally, use a one line arrow function and invoke it.
let grams =  (kilo => kilo*1000)(77);
console.log(grams);

//EX3
//Create a self invoking function that takes 4 arguments: 
//number of children, partner’s name, geographic location, job title.

(function(childrenNum, partnerName, location, job){console.log(`You will be a ${job} in ${location}, 
and married to ${partnerName} with ${childrenNum} kids.`)}(2, "Simcha", "Lisbon", "baker"));

(function(childrenNum, partnerName, location, job){   
    let fortune = document.createElement("h1")
    let content = document.createTextNode(`You will be a ${job} in ${location}, 
    and married to ${partnerName} with ${childrenNum} kids.`)
    fortune.appendChild(content)
    let div = document.getElementById("newDiv");
    div.appendChild(fortune);} (2, "Simcha", "Lisbon", "baker"));

//EX4
//Create a Bootstrap Navbar in your HTML file.
//create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
//The function should add a div in the nabvar, displaying the name of the user and his profile picture.
(function(userNew){
    let namediv = document.createElement("div")
    let username = document.createTextNode(userNew)
    namediv.appendChild(username)
    let divAdd = document.getElementById("navbarNav")
    divAdd.appendChild(namediv);
}("John"));

//EX5
//The outer function named makeJuice receives 1 argument: 
//the size of the beverage the client wants - small, medium or large
//The inner function named addIngredients receives 3 ingredients, 
//and displays on the DOM a sentence like: 
//The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
//Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

let sizeOptions = ['small','medium','large'];
const makeJuice = function(sizeOptions) {
    let ingredients = [];
    const addIngredients = function(firstIng, secondIng, thirdIng) {
        if (ingredients){
            ingredients.push(firstIng, secondIng, thirdIng)   
        } 
        console.log(ingredients) 
        const displayJuice = function(){
            let orderIn = document.createElement("h2")
            let order = document.createTextNode(`The client wants a ${sizeOptions} juice, containing ${ingredients[0]}, ${ingredients[1]}, ${ingredients[2]}, ${ingredients[3]}, ${ingredients[4]}, ${ingredients[5]}`)
            orderIn.appendChild(order)
            let div2 = document.getElementById('newDiv')
            div2.appendChild(orderIn)
            document.querySelector("h2").style.visibility = "hidden";
        };
        displayJuice()
    };
    addIngredients('Dates', "Mellons", "Apples"); 
    addIngredients('Carrots', 'Ginger', 'Wheat-grass') 
};
makeJuice(sizeOptions[2])


// PART 2
//In the makeJuice function, create an empty array named ingredients.
//The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.
//Create a new inner function named displayJuice that displays on the DOM a sentence like: 
//The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.


 
    
 