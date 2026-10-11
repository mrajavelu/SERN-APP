const express = require('express');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');
// const mysql = require('mysql2')
const routes = require("./server/routes/student")
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static files
app.use(express.static("public"));

// Configure Handlebars
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
// Router configuration
app.use(routes);
// Start server
app.listen(port, () => {
  console.log("Server listening on port: " + port);
});
