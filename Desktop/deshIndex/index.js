// Stock and crypto market Dashboard

const express = require('express');
var { engine } = require('express-handlebars');
const app = express();
const path = require('path');
// const request = require('request');
// const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

// Set handleBars Middleware

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use(express.static('views'));

// Set Handlebar Routes
app.get('/', (req, res) => {
  res.render('home', {
    stuff: 'This is stuff',
  });
});

// Set static folder and point our app to it

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Server Listening on PORT' + PORT));
