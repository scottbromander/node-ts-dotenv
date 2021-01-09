/*
To run this project,
npm i
npm start
This will both build the project, as well as start the server on port 3000.
*/

import express = require('express');
import * as dotenv from 'dotenv';
dotenv.config();

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
  // Observe that when you visit localhost:3000, you see the message hidden in the env file
  res.send(`${process.env.SOME_VAR}`);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
