var mongoose = require('mongoose');
var Post = mongoose.model('Posts');
var Utilities = require('../config/utilities');

//Get all Post in Database
exports.getAllPost = function(req, res) {
    Post.find({}, function(err, posts) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(posts)
        }
    })
};


//Get post by Id of Post
exports.getPostById = function(req, res) {

};

exports.createPost = function(req, res) {
    var newPost = Post({
        title: req.body.title,
        description: req.body.description,
        content: req.body.content,
        postBy: req.body.postBy
    });
    // var newPost = Post({
    //     title: 'Le hoi hoa trang',
    //     description: 'Dien ra tu ngay 20/11 den ngay 25/11',
    //     content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    //     postBy: 'Mountain Nguyen'
    // });

    newPost.save(function(err, post) {
        if (err) {
            return res.jsonp(err);
        } else {
            return res.jsonp(post);
        }
    })
};

exports.updatePostById = function(req, res) {

};

exports.deletePostById = function(req, res) {

};

exports.setPinPost = function(req, res) {

};
