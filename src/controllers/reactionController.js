const Reaction = require("../models/reaction");

module.exports = {
    addReaction: function(req, res) {
        const data = req.body;
        const responseBody = {
            success: false
        };
        if(data.isActive) {
            Reaction.updateReaction(data, function(err, result){
                if(err) {
                    console.log(err);
                    return res.status(500).send(responseBody);
                } else {
                    responseBody.success = true;
                    return res.status(200).send(responseBody);
                }
            });
        } else {
            Reaction.createReaction(data, function(err, result){
                if(err) {
                    console.log(err);
                    return res.status(500).send(responseBody);
                } else {
                    responseBody.success = true;
                    return res.status(200).send(responseBody);
                }
            });
        }
    }
}