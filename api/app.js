var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const KEYS = require("dotenv").config();
const axios = require("axios");

let telegram_url =
  "https://api.telegram.org/bot" +
  (process.env.TOKEN || KEYS.parsed.TOKEN) +
  "/sendMessage";

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.all("/start_bot", async (req, res) => {
  const message  = req.body.message;
  if (message == "getdata") {
    var reply = await axios.get("https://api.rootnet.in/covid19-in/stats/latest")
    res.send(JSON.stringify(reply.data.data))
    res.end();
  } else {
    res.send("send the correct message please")
    res.end()
  }
});

let port = (process.env.PORT || 3000);
app.listen(port, () => console.log(`Server is listening on port: ${port}`))