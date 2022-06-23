const knex = require('knex');
const dotenv = require('dotenv');

dotenv.config();

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
});

const getAllProducts = () => {
    return db('products')
    .select('name', 'price', 'id')
    .orderBy('name')
};

const getProduct = (product_id) => {
    return db('products')
    .select('name', 'price', 'id')
    .where({id: product_id})
};
// Ip
const searchProduct = (query) => {
    return db('products')
    .select('name', 'price', 'id')
    .whereILike('name', `${query}%`)
};

const insertProduct = (product) => {
    return db('products')
    .insert(product)
    .returning('*')
};

const deleteProduct = (id) =>{
    return db('products')
    .del()
    .where({id:id})
    .returning('*')
};

const updateProduct = (id, product) => {
    return db('products')
    .update(product)
    .where({id:id})
    .returning('*')
};

module.exports = {
    getAllProducts,
    getProduct,
    searchProduct,
    insertProduct,
    deleteProduct,
    updateProduct
};