// Use knex
const knex = require('knex');
// Use .env file
const dotenv = require('dotenv');
// Initialize .env file
dotenv.config();
// Initialize DataBase as an Object
const db = knex({
    client:'pg',
    connection:{
      host:process.env.DB_HOST,
      port:process.env.DB_PORT,
      user:process.env.DB_USER,
      password:process.env.DB_PASS,
      database:'dvdrental '
    }
});

const getCountries = ()=>{
   return db('country')
    .select('country', 'country_id')
}

const getCities = (id)=>{
    return db('city')
    .where({'country_id':id})
     .select('city_id','city') 
}


module.exports = {
    getCountries,
    getCities
}