const express = require('express');
const { spawn } = require('child_process');
const { MongoClient } = require('mongodb');

const app = express();

const mongoUri = 'mongodb://127.0.0.1:27017/';

const mongoClient = new MongoClient(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const hostname = '127.0.0.1';
const port = 3000;

mongoClient.connect();

app.get('/test', (req, res) => {
  
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
