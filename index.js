const express = require('express');

// Constants
const PORT = 8080;
const HOST = '';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, function () {
    console.log('Example app listening on port 8080!')
  });