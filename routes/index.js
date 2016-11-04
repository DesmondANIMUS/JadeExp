var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
  // first parameter in above function is the page we wish to rende
  // and the second object is going to be the JSON object
});

module.exports = router;
