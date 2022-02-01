//EX1
//retrieve the h1 and console.log it
// let mainHeader = document.getElementsByTagName('h1')[0].innerHTML;
let mainHeader = document.querySelector('h1'); 
console.log(mainHeader);
//remove the last paragraph in the <article> tag
let pQnt = document.getElementsByTagName('p').length;
let toRemove = document.getElementsByTagName('p')[pQnt-1];
toRemove.remove();
//Add a event listener which will change the background color of the h2 to red, 
//when it’s clicked on
let secondHeader = document.querySelector('h2');
    secondHeader.addEventListener('click', function(e){
    e.target.style.background = 'red';
});
//Add an event listener which will hide the h3 when it’s clicked on 
//(use the display:none property).
let thirdHeader = document.querySelector('h3');
    thirdHeader.addEventListener('click', function(e){
        e.target.style.display = 'none';
    })
//Add a <button> to the HTML file, that when clicked on, 
//should make the text of all the paragraphs, bold.
let article = document.querySelector('article');
let newBtn = document.createElement('button');
let btnTextNode = document.createTextNode('enlarge font size');
newBtn.appendChild(btnTextNode);
article.parentNode.insertBefore(newBtn, article.nextSibling);

newBtn.addEventListener('click', function(){
    let makeBold = document.querySelectorAll('p');
    for (let i = 0; i < makeBold.length; i++) {
        makeBold[i].style.fontWeight = 'bold';      
    }
})


//EX2
//Retrieve the form and console.log it
let form = document.querySelector('form');
console.log(form);
//Retrieve the inputs by their id and console.log them
let inputFn = document.getElementById('fname');
let inputLn = document.getElementById('lname');
let submit = document.getElementById('submit');
console.log(inputFn, inputLn, submit);
//Retrieve the inputs by their name attribute and console.log them
let fnName = document.querySelector('input[name=fname]');
let lnName = document.getElementsByName('lname');
console.log(fnName, lnName);//I'm not sure which wayy did you meen. so i made both examples.
//When the user submits the form
submit.addEventListener('click' ,makeUl())
   
function makeUl(){
    let firstValue = inputFn.value;
    let secondValue = inputLn.value;
    console.log(firstValue);
    // if (firstValue&&secondValue) {
    //     alert("let move on")
    //     }else{ alert('oops')}
    //     for (let i = 0; i < e.target.elements.length-1; i++) {
    //         let userInput = e.target.elements[i]
    //         let userLi = document.createElement('li')
    //         let userText = document.createTextNode(userInput)
    //         userLi.append(userText)
    //         let userUl = document.querySelector('ul')
    //         userUl.append(userLi) 
    //     }
    }
//EX3
//Create a global variable named allBoldItems.
    