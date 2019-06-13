const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
})

app.get('/rickandmorty', (req, result) => {
  console.log("got a GET request for the index page");

  const res = fetch ('https://rickandmortyapi.com/api/character/?page=19')
  const data = res.json();
  console.log(res)
  response.json({
    status: 'GET Request Recieved',
    data: data.data
  })
})

app.get('/pokemon/:id', (req, res) => {
  const poke = pokemon.find(poke => poke.id === parseInt(req.params.id));
  if(!poke) res.status(404).send('not a fluffin pokemon')

  res.send(poke)
  return;
})
