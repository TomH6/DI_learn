let form = document.querySelector('form');

let kToC =(currentTempKal)=>{
    let curTempC =  currentTempKal -  273.15;
    return Math.round(curTempC);
};

let wrongPlace=(cityName)=>{
    let wrongDiv = document.createElement('div');
    let wrongHeader = document.createElement('h3');
    wrongHeader.textContent = ` ${cityName} is NOT A real place`;
    wrongDiv.appendChild(wrongHeader);
    form.appendChild(wrongDiv);
    form.reset();
}

let createCityCard = (info)=>{   
    let bottom = document.getElementById('bottom');
    let card = document.createElement("div");
    card.classList.add('card');
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
    temp.classList.add('card-text');
    temp.textContent = `${curTempC}°C`;
    let currentHum = info.list[0].main.humidity;
    let humid = document.createElement('p');
    humid.classList.add('card-text')  ;
    humid.textContent = `Humidity: ${currentHum}%`;
    let description = info.list[0].weather[0].description;
    let desc = document.createElement('p');
    desc.classList.add('card-text');
    desc.textContent = description;
    card.appendChild(icon);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(temp);
    cardBody.appendChild(humid);
    cardBody.appendChild(desc);
    card.appendChild(cardBody);
    bottom.appendChild(card);
};


// let button = document.querySelector("#submit");
//     let CountButton = 0;
//     button.addEventListener("click", function() {
//       CountButton += 1;
//       console.log(CountButton);
//     });
// let replaceDiv = (CountButton)=>{
//     if (CountButton >= 1){
//         card.classList.add('d-none');
//     }  
// };


let retriveCity =(e)=>{
    e.preventDefault();
    let form = e.target;
    let cityName = form.citySearch.value;
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&id=524901&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`;
    let xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onload = function(){
        if(xhr.status == 200){
            let xhrTobj = JSON.parse(xhr.response) ;     
            createCityCard(xhrTobj);
            form.reset(); 
        } else {
            wrongPlace(cityName)
        }  
    }
    xhr.send();
    
};
form.addEventListener('submit', retriveCity);





