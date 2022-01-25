//EX1
//change the value of the id attribute from navBar to socialNetworkNavigation 
//using the setAttribute method
let navBarDiv = document.getElementById("navBar");
navBarDiv.setAttribute('id', 'socialNetworkNavigation');
console.log(navBarDiv);
//create a new <li> tag (use the createElement method)
let newLi = document.createElement("li");
let newLink = document.createElement("a");
newLink.setAttribute("href", "#");
//Create a new text node with “Logout” as its specified text
let newTextNode = document.createTextNode("Logout");
//Append the text node to the newly created list node (li)
newLi.appendChild(newLink);
newLink.appendChild(newTextNode);
// append this updated list node to the unordered list above, using the appendChild method 
let myList = document.querySelector('ul');
myList.setAttribute("id", "myList");
document.getElementById('myList').appendChild(newLi);
console.log(myList);
//Use the firstElementChild and the lastElementChild properties to retrieve 
//the first and last li elements from their parent element (ul). 
//Display the text of each link. (Hint: use the textContent property).
console.log(myList.firstElementChild.textContent); 
console.log(myList.lastElementChild.textContent); 

//EX2
//change the name “Pete” to “Richard”
const list = document.querySelector('.list');
list.lastElementChild.textContent = 'Richard';
//Change each first name of the two <ul>'s to your name
const bothLists = document.querySelectorAll('.list');
let listsArray = [...bothLists];
listsArray.forEach(list => 
    list.firstElementChild.textContent = "Tom");
//At the end of each <ul> add a <li> that says “Hey students”
const addLiToEndOfUl = () => {

    for (let index = 0; index < listsArray.length; index++) {
            let blanckLi = document.createElement('li');
            let greeting = document.createTextNode('Hey students');
            blanckLi.appendChild(greeting); 
            listsArray[index].appendChild(blanckLi);       
    }
}
addLiToEndOfUl();
//Delete the name Sarah from the second <ul>.
let sarah = listsArray[1].children[1]

if (sarah.parentNode) {
  sarah.parentNode.removeChild(sarah);
}

//Add a class called student_list to both of the <ul>'s.
const addNewClass = (lists, newClass) => {

    for(let i=0; i<lists.length; i++){

        lists[i].classList.add(newClass);
    }
}

addNewClass(listsArray,'student_list');

//Add the classes university and attendance to the first <ul>.
listsArray[0].classList.add("univerity", "attendance");
console.log(listsArray);

//EX3
//Add a “light blue” background color and some padding to the <div>
let lastDiv = document.getElementsByTagName("div")[2];
lastDiv.style.backgroundColor = "lightblue";
lastDiv.style.padding = "1.5rem";
//Do not display the first name (John) in the list
let john = document.getElementsByTagName("ul")[3].firstElementChild;
john.style.visibility = "hidden";
//Add a border to the second name (Pete)
let pete = document.getElementsByTagName("ul")[3].lastElementChild;
console.log(pete);
pete.style.border = "3px solid lightblue";
//Change the font size of the whole body
document.body.style.fontSize = '2em';
//Bonus: If the background color of the div is “light blue”, 
//alert “Hello x and y” (x and y are the users in the div)
let x = john.textContent;
let y = pete.textContent;
if (lastDiv.style.backgroundColor = "lightblue") {
    alert(`hello ${x} and ${y}`);
}