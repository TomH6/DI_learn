const http = require('http');
  
// In this file, use http to create a server.
const server = http.createServer((req, res) => {
    console.log('hello from server');
   //Send the below Javascript Object to the browser
    const user = {
    firstname: 'John',
    lastname: 'Doe'
}
    res.end(JSON.stringify(user));
});

server.listen(8080,()=>{
    console.log('server listening to port 8080');
});