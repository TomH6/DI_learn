const express = require('express');
const dotenv = require('dotenv');
const product_routes = require('./routes/products.js');
const cors = require('cors');
dotenv.config();

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT||9090, ()=>{
    console.log(`listening on port ${process.env.PORT||9090}`);
});

app.use('/api/products', product_routes);