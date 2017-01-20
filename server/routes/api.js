const express = require('express');
const router = express.Router();
var mongoose = require( 'mongoose' );
var Feed = mongoose.model('Feed');

// declare axios for making http requests
// const axios = require('axios');
// const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
// router.get('/posts', (req, res) => {
//   // Get posts from the mock api
//   // This should ideally be replaced with a service that connects to MongoDB
//   axios.get(`${API}/posts`)
//     .then(posts => {
//       res.status(200).json(posts.data);
//     })
//     .catch(error => {
//       res.status(500).send(error)
//     });
// });

router.route('/posts')
  //creates a new post
  .post(function(req, res){

    var post = new Feed();
    post.text = req.body.text;
    console.log(post.text);
    
    post.res1 = req.body.res1;
    post.res2 = req.body.res2;
    post.res3 = req.body.res3;
    post.res4 = req.body.res4;
    post.created_by = req.body.created_by;

    post.save(function(err, post) {
      if (err){
        return res.send(500, err);
      }
      return res.json(post);
    });
  })
  //gets all posts
  .get(function(req, res){
    console.log('debug1');
    Feed.find(function(err, feeds){
      console.log('debug2');
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