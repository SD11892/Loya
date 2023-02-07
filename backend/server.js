const https = require(`https`);
const fs = require(`fs`);
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const privateKey = fs.readFileSync('../cert/private.key');
const certificate = fs.readFileSync('../cert/cert.crt');
const authority = fs.readFileSync('../cert/bundle.crt');
global.__basedir = __dirname;
const app = express();

app.use(helmet());
app.use(compression());
app.use(cors());

app.use(require('./routes/auth.routes'));
app.use(require('./routes/form.routes'));
app.use(require('./routes/testimonial.routes'));
app.use(require('./routes/wall.routes'));

app.use(require('./routes/testimonialForm.routes'));
app.use(require('./routes/project.routes'));
app.use(require('./routes/tag.routes'));
app.use(require('./routes/stripe.routes'));
app.use(bodyParser.json());

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(JSON.stringify(req.body, null, 2));
});
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to bezkoder application.' });
});

// set port, listen for requests
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;
const PORT = process.env.PORT || 9000;
var cors_proxy = require('cors-anywhere');

cors_proxy
  .createServer({
    httpsOptions: {
      key: privateKey,
      cert: certificate,
    },
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
  })
  .listen(port, host, function () {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
  });
https
  .createServer(
    {
      key: privateKey,
      cert: certificate,
      ca: authority,
      requestCert: true,
      rejectUnauthorized: false,
    },
    app
  )
  .listen(PORT, '0.0.0.0');

// var cors_proxy = require('cors-anywhere');
// var host = process.env.HOST || '0.0.0.0';

// cors_proxy
//   .createServer({
//     originWhitelist: [], // Allow all origins
//     requireHeader: ['origin', 'x-requested-with'],
//     removeHeaders: ['cookie', 'cookie2'],
//   })
//   .listen(PORT, host, function () {
//     console.log('Running CORS Anywhere on ' + host + ':' + PORT);
//   });
