const form = document.querySelector('form');
const clear = document.querySelector('#clear');
const bottom = document.getElementById('bottom');
let celOrFar = document.querySelector(`input[type=checkbox]`);

const celForFar = (e)=>{
    [...document.querySelectorAll('.temp')].forEach(p=>{
        kToC(parseFloat(p.textContent),p)})
   
}


const kToC =(currentTempKal,p)=>{
    console.log(currentTempKal);
    let celOrFarVal = celOrFar.checked; 
    const celcius = currentTempKal -273.15;
    const farenheit = celcius * (9/5) +32;
    console.log(farenheit);
    let curTempC;
    let unit = celOrFarVal
    ? 'F'
    : 'C'
    if(!p){
        curTempC = celOrFarVal
        ?farenheit.toFixed(2)
        :celcius.toFixed(0)
    }
    else{
        curTempC = !celOrFarVal
        ?celcius.toFixed(0)
        :farenheit.toFixed(2)
    }
    
    let toReturn = `${curTempC} °${unit}`;
    if(p){p.textContent = toReturn};
    return toReturn;
    
};

const wrongPlace=(cityName)=>{
    let wrongDiv = document.createElement('div');
    wrongDiv.id = 'divError';
    let wrongHeader = document.createElement('h3');
    wrongHeader.textContent = ` ${cityName} is NOT A real place`;
    wrongDiv.appendChild(wrongHeader);
    form.appendChild(wrongDiv);
    form.reset();
}

let createCityCard = (info)=>{
    let wrongDiv = document.querySelector('#divError')
    if(wrongDiv){
        wrongDiv.remove();}
    
    let card = document.createElement("div");
    card.classList.add('card');
    let del = document.createElement('button');
    del.classList.add('btn-close');
    del.addEventListener('click',()=>card.remove());
    let weatherIcon = info.list[0].weather[0].icon;
    let icon = document.createElement('img');
    icon.classList.add('card-img-top');     
    icon.src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    let cardBody = document.createElement('div');
    cardBody.classList.add("card-body");
    let cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = `${info.city.name}  ${info.city.country}`;
    let currentTempKal = info.list[0].main.temp;
    let curTempC = kToC(currentTempKal);
    let temp = document.createElement('p');

    temp.classList.add('card-text', 'temp');
    temp.textContent = `${curTempC}`;
    let currentHum = info.list[0].main.humidity;
    let humid = document.createElement('p');
    humid.classList.add('card-text')  ;
    humid.textContent = `Humidity: ${currentHum}%`;
    let description = info.list[0].weather[0].description;
    let desc = document.createElement('p');
    desc.classList.add('card-text');
    desc.textContent = description;
    card.appendChild(del);
    card.appendChild(icon);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(temp);
    cardBody.appendChild(humid);
    cardBody.appendChild(desc);
    card.appendChild(cardBody);
    bottom.appendChild(card);
};


const retriveCity =(e)=>{
    e.preventDefault();
    let form = e.target;
    let cityName = form.citySearch.value;
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&id=524901&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`;
    let xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);
    if(cityName){
    xhr.onload = function(){
        if(xhr.status == 200){
            let xhrTobj = JSON.parse(xhr.response) ;     
            createCityCard(xhrTobj);
            form.reset(); 
        } else {
            wrongPlace(cityName)
        }  
    }}
    xhr.send();
    
};
form.addEventListener('submit', retriveCity);
clear.addEventListener('click', ()=>bottom.innerHTML = "");
celOrFar.addEventListener('change', celForFar);




