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

app.post("/start_bot", (req, res) => {
  const { message } = req.body;
  if (message != "/getlatestdata") {
    var reply = "Sorry, please send the standard command";
  } else {
    var reply = axios.get("https://api.rootnet.in/covid19-in/stats/latest").then((res) => {
      return JSON.parse(responsedata.body)["data"]["summary"];
    })
  }
  sendMessage(telegram_url, message, reply, res);
  return res.end();
});

sendMessage = (telegram_url, message, reply, res) => {
  axios({
    method: post,
    url: telegram_url,
    data: {
      chat_id: message.chat.id,
      text: reply
    }
  })
    .then(response => {
      console.log("Message posted");
      res.end("ok");
    })
    .catch(error => {
      console.log(error);
    });
};

let port = (process.env.PORT || 3000)
app.listen(port, () => console.log("Telegram bot is listening on port: " + port));