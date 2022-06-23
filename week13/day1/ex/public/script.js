const countriesSlct = document.getElementById('countries'); 

let initPage = () => {
    console.log('page is fully loaded');
    fetch('/countries')
    .then(res => res.json()) 
    .then(data => {
    console.log('Success:', data)
    })
    .catch((error) => {
    console.error('Error:', error);
    });
} 
initPage()

