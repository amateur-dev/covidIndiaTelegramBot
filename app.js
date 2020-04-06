var express = require("express");
var bodyParser = require("body-parser");
const KEYS = require("dotenv").config();
const axios = require("axios");

const api = require("./api/api")

var app = express();
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.all("/", (req, res) => {
    res.status(200, { "Content-Type": "text/html" });
    res.end("<html>Thank you for visting the landing page</html>");

})

app.use("/api", api);

let port = (process.env.PORT || 3000);
app.listen(port, () => console.log(`Server is listening on port: ${port}`))