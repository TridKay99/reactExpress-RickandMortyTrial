const cors = require('cors')
const fetch = require('node-fetch');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
})

// Getting rick and morty API and saying the data
app.get('/rickandmorty',(req, res) => {
  console.log("got a Get request for the Index page");
  asyncFunc()
  .then((data) => {
    console.log(data);
    res.json({
      status: 'GET Request Recieved',
      data: data
    })
  })
})

const asyncFunc = async() => {
  const result = await fetch ('https://rickandmortyapi.com/api/character/?page=19')
  const data = await result.json()

  return data.results
}