const { executeQuery } = require("../services/sqlConnection");

module.exports = {
    createReaction: function(data, callback) {
        const sql = "INSERT INTO Reactions (Type, UserID, RefID, IsPost, IsActive, CreatedAt, UpdatedAt) VALUES (?, ?, ?, ?, ?, now(), now())";
        const sqlData = [];
        sqlData.push("like");
        sqlData.push(data.userId);
        sqlData.push(data.refId);
        sqlData.push(1);
        sqlData.push(1);
        executeQuery(sql, sqlData, function(err, result){
            callback(err, result);
        });
    },

    checkReaction: function() {
        const sql = "";
        const sqlData = [];
        executeQuery(sql, sqlData, function(err, result){
            callback(err, result);
        });
    },

    updateReaction: function(data, callback) {
        const sql = "Update Reactions IsActive = 0, UpdatedAt = now() WHERE RefID = ? AND UserID = ?";
        const sqlData = [];
        sqlData.push(data.refId);
        sqlData.push(data.userId);
        executeQuery(sql, sqlData, function(err, result){
            callback(err, result);
        });
    }
}