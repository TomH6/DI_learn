//Create two functions. Each function should return a promise.

//The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. 
//The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
let words = ['yes', 'no', 'black', 'white', 'cool'];
let promiseCaps;
const makeAllCaps = arr => {    
    return  new Promise((resolve,reject)=>{
        if(arr.every(element => typeof element === 'string')) {
            resolve(arr.map(word => word.toUpperCase()));   
        } else{
            reject(0)
        }
    })
    // return promiseCaps
}
console.log(makeAllCaps(words)) ;

// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. 
// The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.
    
const sortWords = arr => {
    let promiseSort = new Promise((resolve,reject)=>{
        if(arr.length>4){
            resolve(arr.sort());
        } else{
            reject(1)
        }
    })
    return promiseSort
}
console.log(sortWords(words));
let errorHandler = step=>{
    switch(step){
        case 0:  return  console.log("There are Non-Strings in this array")
        case 1:  return  console.log("Sorry, array is too small")
}}
makeAllCaps(['yes', 'no', 'black', 'white', 'cool'])
.then(array=>sortWords(array))
.then(sortedArr=>console.log(sortedArr))
.catch(errorHandler);
// makeAllCaps([6, 'no', 'black', 'white', 'cool'])
// .then(array=>sort(array))
// .then(sortedArr=>console.log(sortedArr))
// .catch(string=>console.log(string));