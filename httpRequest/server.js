//Requiring dotENV file.
require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.port || 3001; // use .env file here
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())



// Query parameter -- use question mark

app.get('/', (req, res) => {

  const id_name = req.query.id;
  res.send(`<h1 >The id is ${id_name} </h1 >`);

  const sadiqx = req.query.sadiqx;
  res.send(`<h1 >The name is ${sadiqx} </h1 >`);

  // destructuring
  const { id, name } = req.query;
  res.send(`the student of ${name} id is ${id}`);
});


//Route parameter using ---- slash
app.get('/Userid/:id/userAge/:age', (req, res) => {
  const id = req.params.id;
  const age = req.params.age;
  res.send(`id is ${id} & age is ${age}`);
})


// Send data with headers
app.get('/', (req, res) => {
  const id = req.header.id;
  const age = req.header.age;
  res.send(`id is ${id} & age is ${age}`);
})

// Using bodyParser for JSON  
app.post('/user', (req, res) => {
  const user = req.body.user;
  const age = req.body.age;
  res.send(`userName is ${user} & your age is ${age}`);
})

app.listen(port, () => console.log(`this is running at ${port} `));
