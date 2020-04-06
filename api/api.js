const api = require('express').Router();;
const KEYS = require("dotenv").config();
const axios = require("axios");

let telegram_url =
  "https://api.telegram.org/bot" +
  (process.env.TOKEN || KEYS.parsed.TOKEN) +
  "/sendMessage";

api.all("/", async (req, res) => {
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

module.exports = api;