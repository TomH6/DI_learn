//Use express to create a server.

const express = require('express');
const app = express();

app.get('/',(req, res)=> {
    res.send('<h1>This Is An HTML Tag</h1>');
});


app.listen(3000,()=> {
    console.log('Example app listening on port 3000.');
});
