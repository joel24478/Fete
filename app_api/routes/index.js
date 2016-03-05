//API INDEX

var express = require('express');
var router = express.Router();

var ctrlSignup = require('../controllers/signup'); 
var ctrlHome = require('../controllers/home'); 
var ctrlProfile = require('../controllers/profile');
//var ctrlEvent = require('../controllers/event'); 


//Home
router.get('/',ctrlHome.home);
router.get('/:Eventid/',ctrlHome.getEvent);
router.post('/',ctrlHome.createEvent); 
router.put('/:Eventid/',ctrlHome.updateEvent);
router.delete('/:Eventid/',ctrlHome.deleteEvent);
router.get('/:Eventid/comments/:Commentid',ctrlHome.getComment);
router.post('/:Eventid/comments', ctrlHome.createComment);
router.put('/:Eventid/comments/:Commentid',ctrlHome.updateComment); 
router.delete('/:Eventid/comments/:Commentid',ctrlHome.deleteComment);

//Sign_up 
router.get('/login', ctrlSignup.getUser); 
router.post('/login', ctrlSignup.createUser);

//Login
router.get('/login', ctrlSignup.getUser);

//Event Detail 

//Profile
router.get('/profile',ctrlHome.home);
router.post('/profile',ctrlHome.createEvent); 
router.put('/profile/:Eventid/',ctrlHome.updateEvent);
router.delete('/profile/:Eventid/',ctrlHome.deleteEvent);

module.exports = router; 