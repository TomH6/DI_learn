// Use express
const express = require('express');
// Initialize express
const app = express();
// Use my_modules
const DB = require('./my_modules/db.js');

// Make the server listen for changes on a given port
// app.listen(process.env.PORT||8080, ()=>{
//     console.log(`listening to port ${process.env.PORT}`)
// });
// Get static page
app.use("/",express.static(__dirname+'/public'));
// Create The API
app.get('/countries', (req,res)=>{
    DB.getCountries()
    .then(data=>{
        res.json(data);
        console.log(data);
    })
    .catch(e=>{
        res.json({message:e.message});
    });
})

app.get('/cities/:country_id', (req,res)=>{
    DB.getCities()
    .then(data=>{
        res.json(data);
        console.log(data);
    })
    .catch(e=>{
        res.json({message:e.message});
    });
})







