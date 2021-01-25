const { executeQuery } = require("../services/sqlConnection");

module.exports = {
    createComment: function(data, callback) {
        const sql = "INSERT INTO Comments (Content, UserID, RefID, IsPost, CreatedAt, UpdatedAt) VALUES (?, ?, ?, ?, now(), now())";
        const sqlData = [];
        sqlData.push(data.commentText);
        sqlData.push(data.userId);
        sqlData.push(data.refId);
        sqlData.push(1);
        executeQuery(sql, sqlData, function(err, result){
            callback(err, result);
        });
    },

    updateComment: function() {
        const sql = "";
        const sqlData = [];
        executeQuery(sql, sqlData, function(err, result){
            callback(err, result);
        });
    },

    getPostComments: function(data, callback) {
        const sql = "SELECT ID as id, Content as content, (SELECT Username FROM Users WHERE ID = Comments.UserID) AS postedBy FROM Comments WHERE RefID = ?";
        const sqlData = [];
        sqlData.push(data.postId);
        executeQuery(sql, sqlData, function(err, result){
            callback(err, result);
        });
    }
}