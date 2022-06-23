const getApi = async(url) =>{
    try{
        let res = await fetch(url);
        return res.json();
    }
    catch(e){
        console.log(e);
    }
};

getApi('/countries')
.then(data=>{
    createSelect(data);
});

const createSelect = (arr, id = 'countries')=>{
    let select = document.getElementById(id);
    select.innerHTML = ''; // to prevent earlier picks from piling up
    let option = new Option (`choose ${id}`);
    select.appendChild(option);
    for (let i = 0; i < arr.length; i++) {
        option = new Option (arr[i].country||arr[i].city, arr[i].country_id||arr[i].city_id);
        select.appendChild(option);
    }// will set option name and option id for all options
}

const getCities = (event) =>{
    console.log(event.target.value); // gets the option value
    let country = event.target.value;
    getApi(`/cities/${country}`)
    .then(data =>{
        createSelect(data, 'cities');
    })
}