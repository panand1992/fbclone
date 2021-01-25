const User = require("../models/user");

module.exports = {
    createUser: function(req, res) {
        const data = req.body;
        const responseBody = {
            success: false
        };
        User.createUser(data, function(err, result){
            if(err) {
                console.log(err);
                return res.status(500).send(responseBody);
            } else {
                responseBody.success = true;
                responseBody.userId = result.insertId;
                return res.status(200).send(responseBody);
            }
        });
    }
}