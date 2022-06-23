const express = require('express');
const app = express();

app.use('/',express.static(__dirname+'/public'));

app.listen(5000, ()=>{
  console.log('listen on port 5000');
})

// app.get
// app.post
// app.put
// app.delete
const products = [
  {name:'iPhone',price:800},
  {name: 'iPad', price:650},
  {name: 'iWatch', price: 750}
];

app.get('/api/products',(req,res)=>{
  res.json(products)
})

app.get('/api/search',(req,res) => {
  console.log(req.query);
  const result = products.find(item =>{
    return item.name == req.query.name
  });
  res.json(result)
})

app.get('/api/find/:price',(req,res)=>{
  const result = products.filter(item => {
    return item.price >= req.params.price;
  })
  res.json(result);
})






// const http = require('http');
//
// const server = http.createServer((req,res)=>{
//   console.log('url',req.url);
//   console.log('headers',req.headers);
//   console.log('method',req.method);
//   res.end('Hello from server')
// })
//
// server.listen(5000, ()=>{
//   console.log('server listening to port 5000');
// })