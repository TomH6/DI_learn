let planets = 
    [
        {name:"Mercury" ,moons:[]},
        {name:"Venus",moons:[]}, 
        {name:"Earth",moons:["moon"]},
        {name:"Mars", moons:["Phobos","Deimos"]},
        {name:"Jupiter",moons:["Io","Ganymede","Europa"]}, 
        {name:"Saturn",moons:["Titan","Mimas","Rhea","Iapetus","Tethys"]},
        {name:"Uranus", moons:["Miranda", "Ariel", "Umbriel","Titania", "Oberon"]},
        {name:"Neptune",moons:["Naiad", "Thalassa", "Despina"]}
];
console.log(planets);

planets.forEach(planet => {
    let planetDiv = document.createElement('div') //create a div for each planet
    planetDiv.classList.add('planet') //add cladd of 'planet' for each planet
    planetDiv.classList.add(planet.name) // add the planets' name to his class list (for BGcolor)
    console.log(planetDiv);
    let planetTextNode = document.createTextNode(planet.name)
    planetDiv.appendChild(planetTextNode)
    planet.moons.forEach(moon => {
        let moonDiv = document.createElement('div') //create a div for each moon
        moonDiv.classList.add('moon') //add cladd of 'moon' for each moon
        console.log(moonDiv)
        let moonTextNode = document.createTextNode(moon)
        moonDiv.appendChild(moonTextNode)
        planetDiv.appendChild(moonDiv)
    });
    document.querySelector('.listPlanets').append(planetDiv)
});


