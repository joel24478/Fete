var mongoose = require('mongoose');
var Loc = mongoose.model('Profile');

var sendJsonResponse = function(res, status, content) {
res.status(status);
res.json(content);
};
module.exports.home = function (req, res) { 
sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.createEvent = function (req, res) { 
sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.getEvent = function (req, res) { 
sendJsonResponse(res, 200, {"status" : "success"});
}
module.exports.updateEvent = function (req, res) { 
sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.deleteEvent = function (req, res) { 
sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.createComment = function (req, res) { 
sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.getComment = function (req, res) { 
sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.updateComment = function (req, res) { 
sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.deleteComment = function (req, res) { 
sendJsonResponse(res, 200, {"status" : "success"});
};