const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.listen(3000, () => {
  console.log('Express server running port 3000');
});
