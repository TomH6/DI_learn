const domElement = (id)=>document.querySelector(`#${id}`); // setting a  variable for the inputs
const loader = document.querySelector('#loader'); // var for spinner
let button = document.querySelector('#findMe');
const randNum = ()=>Math.floor(Math.random() * 82) + 1;
const url = ()=> `https://swapi.dev/api/people/${randNum()}/`;
let info = document.querySelector('#info');
let errorDiv = document.querySelector('#error');



// An asyncronic function that loops thruogh an array, 
//if the key of an element is 'homeworld' it will fetch the value from the API, 
// parse it and add it as text content to the element.
let loopObj = async (arr)=>{
    arr.forEach(async([key,value]) => {
       let element = domElement(key)
       if(key === 'homeworld'){
          let homeWorldData = await fetch(value)
          let parsedWorld = await homeWorldData.json()
         //  console.log(parsedWorld)
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
   try {
      // spinner start
      displayLoading()
      // function fillet
      // const randNum = Math.floor(Math.random() * 82) + 1;
      // const url = `https://swapi.dev/api/people/${randNum}/`;
      let dataString = await fetch(url())
      // let dataString = await fetch('https://swapi.dev/api/people/17/')
      // console.log(dataString)
      if (dataString.status!==200) {
         throw new Error ('something went wrong', {status:dataString.status})
      }
      let dataObj = await dataString.json()
      let objEntries = Object.entries(dataObj);
      console.log(objEntries)
      await loopObj(objEntries)
      //spinner end
      hideLoading()
      info.classList.remove('d-none');
      errorDiv.classList.add('d-none');
   }
    catch (error) {
      console.log(error.options)
      hideLoading()
      info.classList.add('d-none');
      console.log(error)
      errorDiv.classList.remove('d-none');
      document.querySelector('#msgError').textContent = error.message;
   }
}

// show load spinner
function displayLoading() {
   loader.classList.remove("d-none");
}

// hide load spinner 
function hideLoading() {
   loader.classList.add("d-none");
}

// EVENTLISTENER(s)

button.addEventListener('click',getData);







