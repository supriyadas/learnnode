var express = require('express');


var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'Node ',page:'form'});
});

module.exports = router;
