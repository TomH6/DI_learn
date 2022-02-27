const domElement = (id)=>document.querySelector(`#${id}`); // setting a  variable for the inputs
const loader = document.querySelector('#loader'); // var for spinner

// An asyncronic function that loops thruogh an array, 
//if the key of an element is 'homeworld' it will fetch the value from the API, 
// parse it and add it as text content to the element.
let loopObj = async (arr)=>{
    arr.forEach(async([key,value]) => {
       let element = domElement(key)
       if(key === 'homeworld'){
          let homeWorldData = await fetch(value)
          let parsedWorld = await homeWorldData.json()
          value = parsedWorld.name;
       }
        element
            ?element.textContent=value
            :null
    });
}

// An asyncronic function that gets data of a random character by name (there are 82 characters in the API).
// this function also provides the array for the loopObj function
const getData = async ()=>{
   // spinner start
   displayLoading()
   // function fillet
   const randNum = Math.floor(Math.random() * 82) + 1;
   const url = `https://swapi.dev/api/people/${randNum}/`;
   let dataString = await fetch(url)
   let dataObj = await dataString.json()
   let objEntries = Object.entries(dataObj);
   await loopObj(objEntries)
   //spinner end
   hideLoading()
}

// show load spinner
function displayLoading() {
   loader.classList.remove("hidden");
}

// hide load spinner 
function hideLoading() {
   loader.classList.add("hidden");
}

// EVENTLISTENER(s)

let button = document.querySelector('#findMe');
button.addEventListener('click',getData);







