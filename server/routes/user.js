var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var bcrypt = require('bcryptjs');
var User = require('../models/user');


router.get('/', (req, res) => {
	console.log(req.query.name);
  	return res.send('api works');
});

router.post('/', function(req, res){
	var name = req.body.name;
	console.log(name);
	return res.send({name: name});
});

module.exports = router;