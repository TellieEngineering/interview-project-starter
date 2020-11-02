const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());


app.get('/health', (req, res) => {
  console.log('GET /health');
  res.sendStatus(200);
});

app.listen('8080');
console.log('Server online.');
