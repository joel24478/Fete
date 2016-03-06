var mongoose = require('mongoose');
var Loc = mongoose.model('Profile');

var sendJsonResponse = function(res, status, content) {
res.status(status);
res.json(content);
};
module.exports.getUser = function (req, res) { 
//get the user
//console.log( Loc.findById("56d358b977f5dbf585b491c8")); 
if (req.params && req.params.Userid) {
    Loc
      .findById(req.params.Userid)
      .exec(function(err, Profile) {
        if (!Profile) {
          sendJsonResponse(res, 404, {
            "message": "User id not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJsonResponse(res, 404, err);
          return;
        }
		console.log( " hello world");
       // console.log(location);
        sendJsonResponse(res, 200, location);
      });
  } else {
  //console.log(location); 
    console.log('No locationid specified');
    sendJsonResponse(res, 404, {
      "message": "No locationid in request"
    });
  }
};
//module.exports.getUser = function (req, res) { 
//}; 
module.exports.createUser = function (req, res) { 
console.log(req.body);
  Loc.create({
    name: req.body.name,
    email: req.body.email,
    pw: req.body.pw,
    About: "",
	Followers: 0,
	Following: 0, 
	Events: [] 
  }, function(err, location) {
    if (err) {
      console.log(err);
      sendJsonResponse(res, 400, err);
    } else {
      console.log(location);
      sendJsonResponse(res, 201, location);
    }
  });
//sendJsonResponse(res, 200, {"status" : "success"});
};