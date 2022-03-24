const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();
app.use(cors());
app.set('view engine', 'ejs');
dotenv.config();


app.listen(`${process.env.PORT}`||6160, ()=>{
    console.log(`listen to port ${process.env.PORT}`);
})

let Parser = require('rss-parser');
let parser = new Parser();

const axios = require('axios');

// async function getUser() {
//   try {
//     const response = await axios.get(`${process.env.API}`);
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }


// Create a few routes in the file server.js:
// / route : will retrieve all the facts from the RSS feed and render the posts 
// in the index.ejs file. It’s a GET request.
let feed;

app.get('/', (req,res)=>{
  console.log('connction astablished!');
  (async () => {
    feed = await parser.parseURL(`${process.env.API}`);
    console.log(feed.title);
    // feed.items.forEach(item => {
    //   console.log(item.title + ':' + item.link);
    // });
  res.render('pages/index', {
      data:feed.items
  });
  console.log(feed.items);
  })();
})

// /search route: renders the search.ejs file. At first, no posts should be displayed. 
// It’s a GET request.

app.get('/search', (req,res)=>{
  res.render('pages/search'); 
});


// /search/title route: will retrieve the input (ie. chosen title) of the user, 
// and render the correct post in the search.ejs file. It’s a POST request.
