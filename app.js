var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const KEYS = require("dotenv").config();
const axios = require("axios");

const ourFunction = require("./api/api");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.all("/", ourFunction);

let port = (process.env.PORT || 3000);
app.listen(port, () => console.log(`Server is listening on port: ${port}`))