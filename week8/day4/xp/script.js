
const giffy = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
// Create a program to retrieve the data from the API URL provided above. 
//Use XMLHttpRequest object to make an AJAX request to the Giphy API and console.log the Javascript Object.

// OPT 1   
$.ajax({
        url: giffy,
        method: "GET"
        }).then(function(response){
            console.log(response);
})
// OPT 2 (the relevant one)
function loadGifObj(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET',giffy,true);
    xhr.onload = function(){
        if(xhr.status == 200){
            let xhrTobj = JSON.parse(xhr.response) 
            console.log(xhrTobj);
        }
    }
    xhr.send()
}
loadGifObj()

// Using this part of the documention, retrieve 10 gifs about the “sun”. 
//The starting position of the results should be 2.
// Console.log the Javascript Object



