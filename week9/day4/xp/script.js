// EX 1
// Convert the below promise into async await:

// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(result => console.log(result));
// ;

// let  getInfo = async()=> {
//     try{
//       let response = await fetch("https://swapi.dev/api/starships/9/");
//       let parsedRes =  await response.json()
//       console.log(parsedRes) 
//     }catch(err){
//       console.error(err);
//     }
// }
// getInfo();

// EX 2
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    let result =  resolveAfter2Seconds();
    result
    .then(console.log)
    .then(e=>console.log('calling'));
}

asyncCall();
// Console will show "calling" - after 2000ms it will also say "resolved"






