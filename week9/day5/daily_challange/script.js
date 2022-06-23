// API KEY:
// 4b15e8d0eb3326f5e043117c

// API ADDRESS:
// https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD

// API+KEY :
// https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/latest/USD
let currencyFrom;
let currencyTo;
let arrayCur=[];
const getAllCurrencies = async ()=>{
    let url = 'https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/codes';
    let dataString = await fetch(url)
    let dataObj = await dataString.json()
    let codesObj = dataObj.supported_codes
    let objEntries = Object.entries(codesObj);
    //  await loopObj(objEntries) 
    console.log(codesObj)
    
}
getAllCurrencies();


const getExchangeRates=()=>{};

const switcRates=()=>{};

// let loopObj = async (arr)=>{
//     arr.forEach(async([key,value]) => {
//        let element = domElement(key)
//        if(key === 'homeworld'){
//           let homeWorldData = await fetch(value)
//           let parsedWorld = await homeWorldData.json()
//          //  console.log(parsedWorld)
//           value = parsedWorld.name;
//        }
//         element
//             ?element.textContent=value
//             :null
//     });
// }
// const getData = async ()=>{
//    try {
//       // spinner start
//       displayLoading()
//       // function fillet
//       // const randNum = Math.floor(Math.random() * 82) + 1;
//       // const url = `https://swapi.dev/api/people/${randNum}/`;
//       let dataString = await fetch(url())
//       // let dataString = await fetch('https://swapi.dev/api/people/17/')
//       // console.log(dataString)
//       if (dataString.status!==200) {
//          throw new Error ('something went wrong', {status:dataString.status})
//       }
//       let dataObj = await dataString.json()
//       let objEntries = Object.entries(dataObj);
//       console.log(objEntries)
//       await loopObj(objEntries)
//       //spinner end
//       hideLoading()
//       info.classList.remove('d-none');
//       errorDiv.classList.add('d-none');
//    }
//     catch (error) {
//       console.log(error.options)
//       hideLoading()
//       info.classList.add('d-none');
//       console.log(error)
//       errorDiv.classList.remove('d-none');
//       document.querySelector('#msgError').textContent = error.message;
//    }
// }