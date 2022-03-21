//*** PART 1 ***//
const fs = require('fs');

fs.readFile('./text.text', (e, data)=>{
    if(e){
        console.log('There is an ERROR!');
    } else {
        console.log(data.toString());
    }
});

//*** PART 2 ***//
// Create an fs.js file, and use the Node js File System to 
// create a new text file and write to it.
fs.writeFile('./text2.text', "Look at me, i'm writing to a file! ",(e)=>{
    if(e){
        console.log('There was an ERROR while writing the file!');
    } 
});
// Use the Node js File System to append some other text to the text file. 
// (Example:”Buy orange juice”)
fs.appendFile('./text2.text', "Buy orange juice",(e)=>{
    if(e){
        console.log('There was an ERROR while appending to file!');
    } 
});
// Use the Node js File System to delete the file.
fs.unlink('./text2.text',(e)=>{
    if(e){
        console.log('There was an ERROR while deleting the file!');
    } 
});