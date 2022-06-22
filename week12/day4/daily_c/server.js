const express = require('express');
const app = express();
// const port = 3000;
app.use('/', express.static(__dirname + '/public'));

app.get('/aboutMe/:hobby', (req, res) => {
  if (typeof req.params.hobby != 'string'){
    res.status(404).send("not found")
    console.log('404 Page not found')
  } else {
    res.json(req.params.hobby)
    console.log(req.params.hobby)
  }
});

app.get('/pic', (req, res) => {
    res.sendFile('/public/pic.html', {root: __dirname})
    console.log('sending pic page')
});

app.get('/formData', (req, res) => {
    let email = req.query.email;
    let message = req.query.message;
    res.end(`${email} sent you a message: ${message}`);
});

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`) 
// });
