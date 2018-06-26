const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('First middleware test');
  next();
});

app.use((req, res, next) => {
  res.send('Hello from express!');
  console.log('req.url: ' + req.url);
});

module.exports = app;
