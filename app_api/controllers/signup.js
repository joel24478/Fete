var mongoose = require('mongoose');
var Loc = mongoose.model('Profile');

var sendJsonResponse = function(res, status, content) {
res.status(status);
res.json(content);
};
module.exports.getUser = function (req, res) { 
sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.createUser = function (req, res) { 
sendJsonResponse(res, 200, {"status" : "success"});
};