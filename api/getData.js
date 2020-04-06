// const api = require('express').Router();;
// const KEYS = require("dotenv").config();
const axios = require("axios");

// api.get("/", async (req, res) => {
//   var reply = await axios.get("https://api.rootnet.in/covid19-in/stats/latest")
//   res.send(JSON.stringify(reply.data.data))
//   res.end();
//   // const message  = req.body.message;
//   // if (message == "getdata") {
//   //   var reply = await axios.get("https://api.rootnet.in/covid19-in/stats/latest")
//   //   res.send(JSON.stringify(reply.data.data))
//   //   res.end();
//   // } else {
//   //   res.send("send the correct message please")
//   //   res.end()
//   // }
// });

module.exports = (async (req, res) => {
  var reply = await axios.get("https://api.rootnet.in/covid19-in/stats/latest")
  res.send(JSON.stringify(reply.data.data))
  res.end();
});