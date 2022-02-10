//  EX1

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}
// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

//Will log: "I am John Doe from Vancouver, Canada. Latitude 49.2827, longitude -123.1207"

//  EX2

let displayStudentInfo = ({first, last}) =>console.log(`Your full name is ${first} ${last}`);
let user = {first: 'Elie', last: 'Schoppik'};
displayStudentInfo(user)
      
// EX 3
const users = {user1: 18273, user2: 92833, user3: 90315};
//Using methods taught in class, turn the users object into an array:
let objArr  = Object.entries(users)
console.log(objArr)
//Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
//FYI : The number is their ID number.
let objArr2 = objArr.map(([a,b])=>([a,b*2]))
console.log(objArr2) 
//Modify the outcome of part 1, by multipling the user’s ID by 2.
//Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ]]

// EX 4
// Analyze the code below. What will be the output?

class Person {
    constructor(name) {
      this.name = name;
    }
  }
  const member = new Person('John');
  console.log(typeof member);
  // typeof member = string

// EX 5

class Dog {
    constructor(name) {
      this.name = name;
    }
};

//Analyze the options below. Which constructor will successfully extend the Dog class?

//Option 2 is the answer. it takes the properties from the parent (super), and only then add new keys and values.
class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
};

// EX 6

// [2] === [2] 
// {} === {}
//Both cases will be false.

//What is, for each object below, the value of the property number 
const object1 = { number: 5 }; 
// 5
const object2 = object1; 
// 5
const object3 = object2;
// 5 
const object4 = { number: 5};
// 5
object1.number = 4;
// 4 

//Create a class Animal with the attributes name, type and color

class Animal {
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}
//Create a class Mamal that extends from the Animal class. It has a method called sound(). 
//This method takes a parameter: the sound the animal makes, and returns the details of the animal 
//(name, type and color) as well as the sound it makes.

class Mamal extends Animal {
    constructor(name, type, color){
        super(name, type, color)
        
    }
    sound(sound){
       return [this.name,this.type,this.color, sound]
    }
}

let dog = new Mamal('Dog', 'Bulldog', 'Black', )
console.log(dog.sound("woof wooof")) 