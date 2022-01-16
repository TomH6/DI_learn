// let array = ['mark', 'phil', 'joe'];
//iterate from start to end
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(index)

//     console.log(element)
// }

//iterate from end to start 
// for (let index = array.length-1; index >= 0; index--) {
//     const element = array[index];
//     console.log(index)

//     console.log(element)
// }

//FOR IN LOOP

// let students = {
//     joe:32,
//     jane:40,
//     bob:20
// }

// for (let student in students) {
//         const age = students[student];
//         console.log(student);
//         console.log(age)

//         console.log(`${student} is ${age} years old`)
// }

//FOR OF LOOP

// let variable = ['matt', 'dave', 'roggo'];
// let variableB = {
//     a: 'qwerty',
//     b: 'qwertyuiop'
// } WE CAN NOT ITERATE STRINGS

// for (const iterator of variable) {
//     console.log(iterator)
// }

//WHILE LOOP    

// let num = 19;
// let smallestDivideBy = 2;

//  while (num%smallestDivideBy!=0){
//      console.log(`${num} cannot be divided by ${smallestDivideBy}`)
//      smallestDivideBy++
//  }

//  console.log(`but it can - by ${smallestDivideBy} `)

//FOR EACH

let arrayNew = ['jim', 'jom', 'jam'];

arrayNew.forEach(element, index => {
    console.log(element);
    console.log(index);  
});