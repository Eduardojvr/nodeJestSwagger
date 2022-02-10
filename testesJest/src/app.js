const express = require("express");
const app = express();
const PessoaRoute = require('../src/routes/PessoaRoute')
const IndexRoute = require('../src/routes/indexRoute')
const bodyParser = require('body-parser');
const swaggerFile = require('../swagger/swagger_output.json');

const swaggerUi = require('swagger-ui-express');

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));


app.use('/pessoa', PessoaRoute)
app.use('/index', IndexRoute)

module.exports = app;