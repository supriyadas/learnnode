var express = require('express');
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  database: "node"
});



var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'this is userlist page ',name:'supriya'});
  //res.json({ message: 'hooray! welcome to our api!' });

  con.query('SELECT * FROM user',function(err,rows){
	  if(err) throw err;

	  console.log('Data received from Db:\n');
	  console.log(rows);
	  res.setHeader('Content-Type', 'application/json');
	  res.json(rows);
	});

});

module.exports = router;
