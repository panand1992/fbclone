const Comment = require("../models/comment");

module.exports = {
    addComment: function(req, res) {
        const data = req.body;
        const responseBody = {
            success: false
        };
        Comment.createComment(data, function(err, result){
            if(err) {
                console.log(err);
                return res.status(500).send(responseBody);
            } else {
                responseBody.success = true;
                return res.status(200).send(responseBody);
            }
        });
    },

    editComment: function(req, res) {
        Comment.editComment(data, function(err, result){
            if(err) {
                // res.status(200).
            } else {

            }
        });
    }
}