const express = require('express');
// middlewares
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');

require('./db.js');
// this is for hooking up frontend build
const path = require('path');

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); //era http://localhost:3000 update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// this is for hooking up frontend build
const _dirname = path.dirname("")
const buildPath = path.join(_dirname, "../vite-client/dist")

server.use(express.static(buildPath))

server.get('/*', function(req, res) {

  res.sendFile(path.join(_dirname, "../vite-client/dist/index.html"),
  function(err) {
    if (err) {
      res.status(500).send(err);
    }
  })
})
////

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
