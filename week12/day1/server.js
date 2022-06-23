const http = require('http');

const server = http.createServer((req, res) => {
    console.log('hello from server');
    // res.end('Hello from my first server!');
    if(req.url == '/'){
        res.end('<h1>Home page</h1>'+'<h2>Some header</h2>'+'<p>blah blah</p>')
    }
    else if(req.url == '/about'){
        res.end('<h1>About</h1>')
    }
    else{
        res.end('<h1>page not found</h1>')
    }
});

// server.listen(5000,()=>{
//     console.log('server listening to port 5000');
// })