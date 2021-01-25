const Post = require("../models/post");
const Comment = require("../models/comment");

module.exports = {
    createPost: function(req, res) {
        const data = req.body;
        const responseBody = {
            success: false
        };
        Post.createPost(data, function(err, result){
            if(err) {
                console.log(err);
                return res.status(500).send(responseBody);
            } else {
                responseBody.success = true;
                return res.status(200).send(responseBody);
            }
        });
    },

    editPost: function(req, res) {
        const data = req.body;
        const responseBody = {
            success: false
        };
        Post.updatePost(data, function(err, result){
            if(err) {
                console.log(err);
                return res.status(500).send(responseBody);
            } else {
                responseBody.success = true;
                return res.status(200).send(responseBody);
            }
        });
    },

    getAllPosts: function(req, res) {
        const data = req.body;
        const responseBody = {
            success: false
        };
        Post.getAllPosts(data, function(err, result){
            if(err) {
                console.log(err);
                return res.status(500).send(responseBody);
            } else {
                responseBody.success = true;
                responseBody.posts = result;
                return res.status(200).send(responseBody);
            }
        });
    },

    getPostDetails: function(req, res) {
        const data = req.body;
        const responseBody = {
            success: false
        };
        Post.getPostDetails(data, function(err, result){
            if(err) {
                console.log(err);
                return res.status(500).send(responseBody);
            } else {
                responseBody.success = true;
                responseBody.postDetails = result[0];
                if(!result[0].userLike) {
                    result[0].userLike = 0;
                }
                Comment.getPostComments(data, function(err, result){
                    if(!err) {
                        responseBody.postDetails.comments = result;
                    } else {
                        console.log(err);
                    }
                    return res.status(200).send(responseBody);
                });
            }
        });
    }
}