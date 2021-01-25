const { executeQuery } = require("../services/sqlConnection");

module.exports = {
    createPost: function(data, callback) {
        const sql = "INSERT INTO Posts (Content, UserID, OnlyMe, CreatedAt, UpdatedAt) VALUES (?, ?, ?, now(), now())";
        const sqlData = [];
        sqlData.push(data.postContent);
        sqlData.push(data.userID);
        sqlData.push(parseInt(data.onlyMe))
        executeQuery(sql, sqlData, function(err, result){
            callback(err, result);
        });
    },

    updatePost: function(data, callback) {
        const sql = "UPDATE Posts SET Content = ?, UpdatedAt = now() WHERE ID = ?";
        const sqlData = [];
        sqlData.push(data.postContent);
        sqlData.push(data.postID);
        executeQuery(sql, sqlData, function(err, result){
            callback(err, result);
        });
    },

    getAllPosts: function(data, callback) {
        const sql = "(SELECT ID AS id, UpdatedAt as updatedAt, Content as content, (SELECT Username FROM Users WHERE ID = Posts.UserID) AS postedBy FROM Posts WHERE OnlyMe = 0) UNION (SELECT ID AS id, UpdatedAt as updatedAt, Content as content, (SELECT Username FROM Users WHERE ID = Posts.UserID) AS postedBy FROM Posts WHERE OnlyMe = 1 AND UserID = ?)";
        const sqlData = [];
        sqlData.push(data.userID);
        executeQuery(sql, sqlData, function(err, result){
            callback(err, result);
        });
    },

    getPostDetails: function(data, callback) {
        const sql = "SELECT ID AS id, UpdatedAt as updatedAt, Content as content, (SELECT Username FROM Users WHERE ID = Posts.UserID) AS postedBy, (SELECT COUNT(*) FROM Reactions WHERE RefID = Posts.ID AND IsActive = 1) AS likes, (SELECT IsActive FROM Reactions WHERE RefID = Posts.ID AND UserID = ?) AS userLike FROM Posts WHERE ID = ?";
        const sqlData = [];
        sqlData.push(data.userId);
        sqlData.push(data.postId);
        executeQuery(sql, sqlData, function(err, result){
            callback(err, result);
        });
    }
}