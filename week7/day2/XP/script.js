//  EX1

// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits]; 
// result = ['bread','carrot', 'potato', 'chicken', 'apple', 'orange']
// console.log(result);

// ------2------
// const country = "USA";
// result = ['u', 's', 'a']
// console.log([...country]);

// ------Bonus------
// let newArray = [...[,,]];
// result = undefiend?
// console.log(newArray);

//  EX2

let users = [
    {firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident'},
    {firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident'},
    {firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor'},
    {firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor'},
    {firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident'},
    {firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    {firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

//Using the map() method, say hello to the users using only their firstname 
//(ie. “Hello Bradley”, “Hello Chloe” ect…)
users.map(e => console.log(`Hello ${e.firstName}`))

//Using the filter() method, 
//create a new array, containing only the Full Stack Residents.
users.filter(e => e.role === 'Full Stack Resident').map(e => console.log(`Good job ${e.firstName}`))
//Bonus : Chain the filter method with a map method, 
//to congratulate the Full Stack Residents 
//(ie. “Good job Bradley”, “Good Job Chloe” ect…)

//  EX3

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// 1. Use the reduce() method to combine all of these into a single string.
console.log(epic.reduce((previousWord, currentWord) => `${previousWord} ${currentWord}`));

//  EX4

let student = [
    {name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}
];
//Using the filter() method, create a new array, containing 
//the students that passed the course.
student.filter(e => e.isPassed === true).map(e => console.log(`Good job ${e.name}, you passed the coure in ${e.course}`))
//Bonus : Chain the filter method with a map method, 
//to congratulate the students with their name and course name 
//(ie. “Good job Jenner, you passed the course in Information Technology”, 
//     “Good Job Marco you passed the course in Robotics” ect…)

