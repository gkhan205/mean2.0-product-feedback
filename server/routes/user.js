var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var User = require('../models/user');

router.route('/login')
	.post(function(req, res){
	 	var nmReq = req.body.username;
	 	var pwdReq = req.body.password;
		var loginOutcome;
		console.log( "Inside authHandler--> Login=%s, Password=%s", nmReq, pwdReq);
	 	User.findOne({username:nmReq}, function(err, userObj){
		    if(userObj === null){
	 	     	loginOutcome = "Login Failed: User name does not exist in db";
		     	console.log(loginOutcome);
		     	return res.status(401).json({
					title: 'Login Failed',
	 				error: {message: 'Invalid Login Credentials'}
				});
		    } else {  //userObj is Not NULL

				console.log( "Password [%s] being matched with hashed password [%s] using bcrypt.compare", 
						pwdReq, userObj.password);
	 	    	bcrypt.compare(pwdReq, userObj.password, function(errCompare, isMatch) {
			        if (errCompare) {
			        	loginOutcome = "Login Failed : bcrypt.comare yielded error" ;
			        	console.log(loginOutcome);
						return res.status(401).json({
							title: 'Login Failed',
			 				error: {message: 'Invalid Login Credentials'}
						});
	 		        }else if (isMatch === true){
	 					loginOutcome = "Login successful";
						console.log(loginOutcome);
	 					var token = jwt.sign({user: userObj}, 'secret', {expiresIn: 18000});
						res.status(200).json({
							message: 'Succesfully Logged In',
							token: token,
							userId: userObj._id
						});
	 				} else{
						loginOutcome = "Login Failed: Password did not match";
						console.log(loginOutcome);
	 					return res.status(401).json({
							title: 'Login Failed',
			 				error: {message: 'Invalid Login Credentials'}
						});
					}
					console.log( "Login outcome [%s]", loginOutcome);
					
				});// bcrypt.compare assynch
	 	   }//userObj is Not NULL
	 	});//findOne
	 });

router.route('/register')
	.post(function(req, res){
		console.log("Inside registerSubmitHandler");
	
	   var usernameReq = req.body.username;
	   var passwordReq = req.body.password;
	   var nameReq = req.body.name;
	   var location = req.body.location;

	   var newuser = new User();
	   newuser.name = nameReq;
	   newuser.username = usernameReq;
	   newuser.password = passwordReq; 
	   newuser.location = location;
	   newuser.admin = false;

	   //save to db through model
	   newuser.save(function(err, savedUser){
	       if(err){
	         var message = "A user already exists with that username or email";
	         console.log(message);
	         res.send(message);
	         return;
	       }else{
	         req.session.newuser = savedUser.username;
	         var token = jwt.sign({user: savedUser}, 'secret', {expiresIn: 18000});
				res.status(200).json({
					message: 'Registered Succesfully',
					token: token,
					userId: savedUser._id
				});
	       }
	   });
	});

module.exports = router;