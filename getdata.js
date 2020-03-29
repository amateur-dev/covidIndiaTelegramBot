const got = require('got');

const coviddata = async () => {
  let responsedata = await got('https://covid2019-api.herokuapp.com/v2/current');
  let jsonreply = JSON.parse(responsedata.body);
  console.log(jsonreply["data"].find(obj => obj.location == "India"));
};

module.exports = coviddata;