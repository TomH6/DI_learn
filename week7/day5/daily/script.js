// Create a function that:
// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.

const isAnagram = (a, b) => {
let str1 = a.toLowerCase().split('').filter(function(e){return e.trim() != ''; }).sort().join()
let str2 = b.toLowerCase().split('').filter(function(e){return e.trim() != ''; }).sort().join()
console.log(`${str1} = ${str2}`)
if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
 }
}
isAnagram("The Morse Code","Here come dots");


// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"
