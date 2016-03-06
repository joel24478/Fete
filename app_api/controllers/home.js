var mongoose = require('mongoose');
var Loc = mongoose.model('Profile');

var sendJsonResponse = function(res, status, content) {
res.status(status);
res.json(content);
};
module.exports.home = function (req, res) { 
//get all events in radius and in time frame
sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.createEvent = function (req, res) { 
sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.getEvent = function (req, res) { 
// get user, then find the event
console.log( Loc.findById(req.params.Eventid)) 
 console.log('Finding location details', req.params);
  if (req.params && req.params.Eventid) {
    Loc
      .findById(req.params.Eventid)
      .exec(function(err, Profile) {
        if (!Profile) {
          sendJsonResponse(res, 400, {
            "message": "Event id not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJsonResponse(res, 400, err);
          return;
        }
		console.log( " hello world");
       // console.log(location);
        sendJsonResponse(res, 200, Profile);
      });
  } else {
  console.log(location); 
    console.log('No locationid specified');
    sendJsonResponse(res, 404, {
      "message": "No locationid in request"
    });
  }
//sendJsonResponse(res, 200, {"status" : "success"});
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