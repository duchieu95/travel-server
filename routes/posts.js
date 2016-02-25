var express = require('express');
var router = express.Router();
var PostController = require('../controllers/posts');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getAllPost',PostController.getAllPost);
router.get('/getPostById',PostController.getPostById);
router.post('/createPost',PostController.createPost);

module.exports = router;
