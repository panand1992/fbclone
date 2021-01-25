const mysql      = require('mysql');
const { mysqlLocal } = require("./config");
const pool  = mysql.createPool(mysqlLocal);

module.exports = {
    executeQuery: function(sql, data, callback) {
        pool.getConnection(function(err, connection) {
            if (err) {
                callback(err);
            } else {
                connection.query(sql, data, function (error, results) {
                    connection.release();
                    if(error) {
                        callback(error)
                    } else {
                        callback(null, results);
                    }
                });
            }
        });
    }
}