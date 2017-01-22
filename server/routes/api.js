const express = require('express');
const router = express.Router();
var mongoose = require( 'mongoose' );
var Feed = require('../models/feeds');
var jwt = require('jsonwebtoken');

// router.use('/', function(req, res, next){
//   jwt.verify(req.query.token, 'secret', function(err, decoded){
//     if(err){
//       return res.status(401).json({
//         title: 'Not Authorised',
//         error: err
//       });
//     }
//     next();
//   })
// });

router.route('/posts')
  //creates a new post
  .post(function(req, res){

    var post = new Feed({
      text: req.body.text,
      res1: req.body.res1,
      res2: req.body.res2,
      res3: req.body.res3,
      res4: req.body.res4,
      user: req.body.user
    });
    
    console.log(req.body);

   // return res.json({req: req.body});

    post.save(function(err, post) {
      if (err){
        return res.send(500, err);
      }
      return res.json(req.body);
    });
  })
  //gets all posts
  .get(function(req, res){
    Feed.find(function(err, feeds){
      if(err){
        return res.send(500, err);
      }
      return res.send(200,feeds);
    });
  });

//post-specific commands. likely won't be used
router.route('/posts/:id')
  //gets specified post
  .get(function(req, res){
    Feed.findById(req.params.id, function(err, post){
      if(err)
        res.send(err);
      res.json(post);
    });
  }) 
  //updates specified post
  .put(function(req, res){
    Feed.findById(req.params.id, function(err, post){
      if(err)
        res.send(err);

      post.created_by = req.body.created_by;
      post.text = req.body.text;

      post.save(function(err, post){
        if(err)
          res.send(err);

        res.json(post);
      });
    });
  })
  //deletes the post
  .delete(function(req, res) {
    Feed.remove({
      _id: req.params.id
    }, function(err) {
      if (err)
        res.send(err);
      res.json("deleted :(");
    });
  });


module.exports = router;