var express = require('express');
var router = express.Router();
const got = require('got');

/* GET users listing. */
router.get('/:country', function(req, res) {
  let country = req.params.country;

  
  let getdata = async (country) => {
    let responsedata = await got('https://api.rootnet.in/covid19-in/stats/latest');
    let jsonreply = JSON.parse(responsedata.body);
    return (jsonreply["data"]["summary"]);
    };
  
  getdata(country).then((success) => {
    res.status = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(success);
  });
  
});

module.exports = router;
