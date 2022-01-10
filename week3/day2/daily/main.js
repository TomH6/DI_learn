// EX1

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
//Remove Banana from the array.
fruits.shift();
console.log(fruits);

//Sort the array in alphabetical order.
fruits.sort();
console.log(fruits);

//Add “Kiwi” to the end of the array.
fruits.push("Kiwi");
console.log(fruits);

//Remove “Apples” from the array. Don’t use the same method as in part 1.
fruits.splice(0, 1);
console.log(fruits);

//Sort the array in reverse order. (Not alphabetical, but reverse the current Array
fruits.reverse();
console.log(fruits);

//  EX2

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

//Access and then console.log “Oranges”.

console.log(moreFruits [1][1][0]);