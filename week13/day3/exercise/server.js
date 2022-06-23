const express =  require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
dotenv.config();
app.use(cors());
app.set('view engine', 'ejs');
//** MIDDLEWARE **/
// const auth = (req,res,next)=>{
//     console.log(req.query);
//     // console.log('you are stuck here until next()');
//     if(req.query.username == 'admin'){
//         next();
//         //only http://localhost:5006/countries?username=admin is allowed
//     }else{
//         res.sendFile(__dirname+'/public/index.html');
//     }
    
// }

// app.use(auth); // will check for ALL pages on this route
// app.use('/countries', auth); // will check this route end only

app.use('/',express.static(__dirname+'/public'));



// Use my_modules
const DB = require('./db.js');

// Get static page
app.use("/",express.static(__dirname+'/public'));


// Create The API
app.get('/countries', (req,res)=>{
        res.render('countries', {
            data:DB.getCountries()
        })
})

// app.listen(process.env.PORT || 5005,()=>{
//     console.log(`listen to port ${process.env.PORT}`);
// });