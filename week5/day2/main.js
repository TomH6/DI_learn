//EX1
//retrieve the h1 and console.log it
let mainHeader = document.getElementsByTagName('h1')[0].innerHTML;
console.log(mainHeader);
//remove the last paragraph in the <article> tag
let lastP = document.getElementsByTagName('p')[3];
if (lastP.parentNode) {
  lastP.parentNode.removeChild(lastP);
}
//Add a event listener which will change the background color of the h2 to red, 
//when it’s clicked on
function changeBg() {
    let secondHeader = document.getElementsByTagName('h2')[0]
    secondHeader.style.backgroundColor = 'red'
}
//Add an event listener which will hide the h3 when it’s clicked on 
//(use the display:none property).
function disappear() {
    let thirdHeader = document.getElementsByTagName('h3')[0]
    thirdHeader.style.display = 'none';
}
//Add a <button> to the HTML file, that when clicked on, 
//should make the text of all the paragraphs, bold.
let article = document.getElementsByTagName('article')[0];
let newBtn = document.createElement('button');
let btnTextNode = document.createTextNode('enlarge font size');
newBtn.appendChild(btnTextNode);
article.parentNode.insertBefore(newBtn, article.nextSibling);
let allP = document.getElementsByTagName('p');
newBtn.addEventListener("click", bolderP);
function bolderP () {
    let arrayOfP = [...allP];
    for (let index = 0; index < arrayOfP.length; index++) {
        arrayOfP[index].innerText.style.fontWeight = 'bolder';    
    }
}

//EX2
//Retrieve the form and console.log it
let form = document.getElementsByTagName('form')[0].innerHTML;
console.log(form);
//Retrieve the inputs by their id and console.log them
let inputFn = document.getElementById('fname');
let inputLn = document.getElementById('lname');
console.log(inputFn.id, inputLn.id);
//Retrieve the inputs by their name attribute and console.log them
let fnName = document.querySelector('input[name=fname]').name;
let lnName = document.querySelector('input[name=lname]').name;
console.log(fnName, lnName);
//get the values of the input tags
