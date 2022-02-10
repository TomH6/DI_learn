let objArray =[
    {id:0, author:"Micheal Jordan", quote:"The key to success is failure.", likes: 0},
    {id:1, author:"Micheal Jordan", quote:"I've missed more than 9,000 shots in my career. I've lost almost 300 games. ...", likes: 0},
    {id:2, author:"Micheal Jordan", quote:"Failure makes me work even harder.", likes: 0},
    {id:3, author:"Micheal Jordan", quote:"I've never been afraid to fail.", likes: 0},
    {id:4, author:"Micheal Jordan", quote:"I know fear is an obstacle for some people, but it is an illusion to me. Failure always made me try harder next time.", likes: 0}
]
let lastRandom;
let qToShow;
let qSpace;
let aToShow;
let aSpace;
let newArr;
let randQuote;

let getRandNum = () =>{
    newArr = objArray.map(e=>e.id)
    let min = 0;
    let max = Math.floor(Math.random() * (newArr.length));
    if (lastRandom === undefined) {
        random = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    else {
        random = Math.floor(Math.random() * (max - min)) + min;
        if (random >= lastRandom) random += 1;
    }
    lastRandom = random;
    randQuote = objArray.find(element =>{  
    return  element.id === random});

        function showQuote() {
            qToShow = randQuote.quote
            qSpace = document.querySelector("#quote")
            qSpace.append(qToShow)
            qSpace.innerHTML = qToShow;
            aToShow = randQuote.author
            aSpace = document.querySelector("#author")
            aSpace.append(aToShow)
            aSpace.innerHTML =aToShow;
        }
        showQuote(randQuote.quote)
}
document.querySelector('#btn').addEventListener("click", getRandNum);

let addNewQuote = () => {
    quoteValue = document.getElementById('newquote').value;
    authorValue = document.getElementById('newauthor').value;
    if (quoteValue && authorValue) {
        let newObjItem = {
            id: objArray.length,
            author: authorValue,
            quote: quoteValue,  
        }
      objArray.push(newObjItem)
     }
  }
  document.querySelector('#btn2').addEventListener('click', addNewQuote);

let characterCounter = () =>{
    let charNum = qToShow.length
    document.getElementById('charAns').textContent = `This quote has ${charNum} characters`
    // alert(`This quote has ${charNum} characters`)
}
document.getElementById('btn3').addEventListener('click', characterCounter)

let letterCounter = () =>{
    let lettersNum = qToShow.match(/\S/g).length; 
    document.getElementById('lettAns').textContent = `This quote has ${lettersNum} lettters`
    // alert(`This quote has ${lettersNum} letters`)
}
document.getElementById('btn4').addEventListener('click', letterCounter);

let wordCounter = () =>{
    let wordsNum = qToShow. match(/(\w+)/g).length
    document.getElementById('wordAns').textContent = `This quote has ${wordsNum} words`
    // alert(`This quote has ${wordsNum} words`)
}
document.getElementById('btn5').addEventListener('click', wordCounter);


let like = () => {
    for (let i = qToShow.id; i < objArray.length; i++) {
        const element = objArray[i];
        
    }
    qToShow.likes = qToShow.likes +1 || 1
    console.log(objArray)
    console.log(objArray[i].likes)
}  
document.getElementById('like').addEventListener('click', like)


// A button “Like” for the user to like a quote. 
//Hint : add a new key to each object that will represent the number of “likes”.