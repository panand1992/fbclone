const { executeQuery } = require("../services/sqlConnection");

module.exports = {
    createUser: function(data, callback) {
        const sql = "INSERT INTO Users (Username, CreatedAt) VALUES (?, now())";
        const sqlData = [];
        sqlData.push(data.userName);
        executeQuery(sql, sqlData, function(err, result){
            callback(err, result);
        });
    }
}