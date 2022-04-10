const knex = require('knex');
const dotenv = require('dotenv');

dotenv.config();

const db = knex({
  client: 'pg',
  connection: {
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : 'dvdrental '
  }
});

const insertText = (value) =>{
 return db('test')
  .insert({text:value})
  .returning('*');
}

const deleteRow = (id) =>{
  return db('test')
  .select('*')
  .where({id:id})
  .clearSelect()
}

module.exports = {
  insertText,
  deleteRow
}
