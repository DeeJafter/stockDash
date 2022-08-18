// Stock and crypto market Dashboard

const express = require('express');
var { engine } = require('express-handlebars');
const app = express();
const path = require('path');
const request = require('request');
// const request = require('request');
// const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

// Set handleBars Middleware
//Create call_Api function
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use(express.static('views'));

//API key
// pk_cab7e99d49134657bfbc0545f85a6d8a
function call_Api(finishedAPI) {
  request(
    'https://cloud.iexapis.com/stable/stock/fb/quote?token=pk_cab7e99d49134657bfbc0545f85a6d8a',
    { json: true },
    (err, res, body) => {
      if (err) {
        return console.log(err);
      }
      // console.log(body);
      if (res.statusCode === 200) {
        // return body;
        finishedAPI(body);
      }
    }
  );
}

// Set Handlebar Routes
app.get('/', (req, res) => {
  //   const api = call_Api();
  call_Api(function (done_Api) {
    res.render('home', {
      stock: done_Api,
    });
  });
});
//about page
app.get('/about', (req, res) => {
  res.render('about');
});

// Set static folder and point our app to it

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Server Listening on PORT' + PORT));
