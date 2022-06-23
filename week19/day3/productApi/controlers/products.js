const {
    getAllProducts, 
    getProduct, 
    searchProduct, 
    insertProduct, 
    deleteProduct, 
    updateProduct
} = require('../modules/db-products.js');

//** CRUD - Create Read Update Delete **// 
// Read - get method - all products
const _getAllProducts = (req, res)=>{
    getAllProducts()
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        console.log(error);
        res.json({mgs:error.message})
    })
};
// Read - get one product with id
const _getProduct = (req, res)=>{
    getProduct(req.params.id)
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        console.log(error);
        res.json({mgs:error.message})
    })
};
// Read - search product by name
const _searchProduct =(req,res)=>{
    searchProduct(req.query.q)
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        console.log(error);
        res.json({mgs:error.message})
    })
};

// Create - create new product
const _insertProduct = (req, res) => {
    insertProduct(req.body)
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        console.log(error);
        res.json({mgs:error.message})
    })
};

// Delete - delete one product 
const _deleteProduct = (req, res)=> {
    deleteProduct(req.params.id)
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        console.log(error);
        res.json({mgs:error.message})
    })
};

//Update - update a product - name, price
const _updateProduct = (req,res)=>{
    updateProduct(req.params.id, req.body)
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        console.log(error);
        res.json({mgs:error.message})
    })
};

module.exports = {
    _getAllProducts,
    _getProduct,
    _searchProduct,
    _insertProduct,
    _deleteProduct,
    _updateProduct
}