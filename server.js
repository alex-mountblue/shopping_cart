const express = require('express');
const bodyparser = require('body-parser');

const router = require('./mongo.router.js');

const port = 3001;
const server = express();

server.use(bodyparser.json());

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
  next();
});

server.get('/', (req, res) => {
  res.send('Hello Shopping cart');
});

server.use(router);

server.listen(port, () => console.log(`shopping cart server started on port ${port}`));
