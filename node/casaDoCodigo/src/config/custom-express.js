
require('marko/node-require').install();
require('marko/express');

const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

require('../app/rotas/rotas')(app);

module.exports = app;