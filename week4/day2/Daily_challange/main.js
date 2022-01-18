let string = prompt('Could you write some words please? and seperate them with a comma');
let wordArray = string.split(",");
 
wordArray.forEach(element => {
    console.log(` ${element} `);
});

let biggestNum = 0;
function getLengthOfLongestElement() {
    
    for(let i=0; i< wordArray.length; i++){
        if(wordArray[i].length > biggestNum){
            biggestNum = wordArray[i].length;   
        }    
    }   return biggestNum;
} 
linesForStars();  
function linesForStars(){
    let starLine = `* ${biggestNum} *`;
    // let wordLine = `* ${}`;
    if (wordArray.length >= 1){
          wordArray.unshift(starLine);
          wordArray.push(starLine);
    } else {
        return;
    }
}

console.log(getLengthOfLongestElement()) ;



console.log(wordArray);

// hello,world,my,name,is,tom

  
