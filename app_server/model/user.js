var mongoose = require('mongoose') 
var Schema = mongoose.Schema; 

var usersSchema = new Schema({ 

name: {type: String, required: true}, 
email:  {type: String, required: true},
pw:  {type: String, required: true},
About: String,
Followers: Number,
Following: Number,
Events; [eventSchema]

}) ;

var eventSchema = new Schema({ 

Description:  {type: String, required: true},
Location:  {type: String, required: true}, 
Pictures: [String], 
Going: Number, 
Attended: Number,
Date: { type: Date, required: true}, 
Public: {type: Boolean, required: true},
coords: { type: [Number], index: '2dsphere'}
});

// var messageSchema 
// var groupSchema 


//mongoose.model('users', usersSchema); 
mongoose.model('Profile', usersSchema);