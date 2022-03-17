// EX 1
 
const http = require('http');
// In this file, use http to create a server.
const server = http.createServer((req, res) => {
    console.log('hello from server');
  // You should return at least three different lines of HTML to the browser.
    res.end('<h1>This is my first response</h1>'+
            '<h2>This is my second response</h2>'+
            '<p>This is my third response</p>')
});

server.listen(3000,()=>{
    console.log('server listening to port 3000');
});
