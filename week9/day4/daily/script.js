// Challange 1

// Implement a simple version of Promise.all.
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'Im here');
});

let promiseArr = [promise1,promise2,promise3];
console.log(promiseArr);

const manyProm = (arr)=>{
    try{
    Promise.all(arr).then((values) => {
        console.log(values);
      });
    }catch(error){
        console.error(error)
    }  
}
manyProm(promiseArr);





// Callange 2
// Retrieve the input’s value and display the hour of the sunrise for both city 
// ONLY when both promises are resolved
// Hint : Use Promise.all()
const submit = document.querySelector('#submit');

const City1 = document.querySelector('[name="city1"]').value;
const lat1 = document.querySelector('[name="lat1"]').value;
const long1 = document.querySelector('[name="long1"]').value;
 
const City2 = document.querySelector('[name="city2"]').value;
const lat2 = document.querySelector('[name="lat2"]').value;
const long2 = document.querySelector('[name="long2"]').value;


// Getting values from HTML
// const getValues = () =>{

// }
// Creating the URL part to get the right city
const urlAddition = (input1,input2)=>{
    if (typeof input1 === "number" && typeof input2 === "number"){
        let urlCity = `?lat=${input1}&lng=${input2}`
        console.log(urlCity)
        return urlCity;
    }else(
        console.log('not a number')
    )
}
urlAddition(lat1,long1);

// Getting sunrise time

const getSunriseTime = (urlAddition)=>{
        fetch(`https://api.sunrise-sunset.org/json${urlAddition}`)
            .then(response => response.json())
            .then(data => console.log(data.results.sunrise));
}


submit.addEventListener('submit', getSunriseTime);
// fetch(`https://api.sunrise-sunset.org/json${latLong1}`)
//   .then(response => response.json())
//   .then(data => console.log(data.results.sunrise))
// ;

