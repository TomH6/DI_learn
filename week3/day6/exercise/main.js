//EX1 Part 1
let people = ["Greg", "Mary", "Devon", "James"];
//Write code to remove “Greg” from the people array.
people.shift();
console.log(people);
//Write code to replace “James” to “Jason”.
people.splice(2, 1, 'Jason');
console.log(people);
//Write code to add your name to the end of the people array.
people.push("Tom");
console.log(people);
//Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"));
//Write code to make a copy of the people array using the slice method
//The copy should NOT include “Mary” or your name.
console.log(people.slice(1, -1));
//Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("Foo")); //It returns -1 because "Foo" is not part of the array.
//Create a variable called last which value is the last element of the array.
let last = people[people.length-1];

//Part 2
//Using a loop, iterate through the people array and console.log each person.
for (const element of people) {
  console.log(element);
}
//Using a loop, iterate through the people array and exit the loop after you console.log “Jason”
for (let i = 0; i < people.length; i++) {
    if (i === people.indexOf("Jason")+1) {
      break;
    } 
    console.log(people[i]);
  }

  //EX2
  //Create an array called colors where the value is a list of your five favorite colors.
  let colors = ['blue', 'yellow', 'green', 'red', 'purple'];
  //Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
  colors.forEach(element => console.log(`my #${colors.indexOf(element)+1} choise is ${element}`));

  //EX3
  //Prompt the user for a number.
//   let num = parseInt(prompt('Please pick A number'));
  //While the number is smaller than 10 continue asking the user for a new number.
//   while (num < 10) {
//     prompt('Please pick ANOTHER number')
//     num++;
//   }

  //EX4

  let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}
//Console.log the number of floors in the building
console.log(building.numberOfFloors);
//Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);
//Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(`${building.nameOfTenants[1]} ${building.numberOfRoomsAndRent.dan[0]}`);
//Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. 
//If it is, than increase Dan’s rent to 1200.
if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan[1] = building.numberOfRoomsAndRent.dan[1]+200 ; 
} else {
    console.log('dan is paying a fair amount');
}
console.log(building.numberOfRoomsAndRent.dan[1]);

//EX5
//Create an object called family with a few key value pairs
let family = {
    father: "Pini",
    mother: "Zehava",
    sister: "Sharona",
    brother: "Ariel",
    myself: "Tom"
}
//Using a for loop, console.log the keys of the object.
for (const property in family) {
  console.log(`${property}`);
}
//Using a for loop, console.log the values of the object.
for (const property in family) {
    console.log(`${family[property]}`);
  }

//EX6
//Given the object and using a for loop, console.log “my name is Rudolf the raindeer”
let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }  

  let sentence = "";
for (const detail in details){
        sentence += ` ${detail} ${details[detail]}`;
    }
console.log(sentence);

//EX7

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let secret = "";
//A group of friends have decided to start a secret society. The society’s name 
//will be the first letter of each of their names sorted in alphabetical order.
names.sort();
names.forEach(element => {
    secret += `${element[0]}`;  
});
    console.log(secret);






  
 