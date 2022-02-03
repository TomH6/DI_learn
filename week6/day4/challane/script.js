let client = "John";

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
//Create an arrow function named displayGroceries, that 
//console.logs the 3 fruits from the groceries object. Use the forEach method.
const displayGroceries = () => (
    groceries.fruits.forEach(element => {
        console.log(element)
    }));
displayGroceries()
//Create another arrow function named cloneGroceries
//In the function, create a variable named user that is a copy of the client variable
//In the function, create a variable named shopping that is a copy of the groceries object.

/*                              ANSWER: 
      The name, total price and the payed variables are all of the primitive kind, 
      which means they can be modified since they are passed by value and not by refference.*/

const cloneGroceries = () => {
    let user = client;
    client = 'Betty'
    console.log(client)
    console.log(user)
    let shopping = groceries
    console.log(groceries)
    console.log(shopping)
    shopping.totalPrice = '35$'
    console.log(groceries.totalPrice)
    console.log(shopping.totalPrice)
    shopping.other.payed = false
    console.log(groceries.other.payed)
    console.log(shopping.other.payed)
  } 
cloneGroceries()
console.log(groceries)    
