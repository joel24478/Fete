var express = require('express');
var router = express.Router();
//var ctrlMain = require('../controllers/main');
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* GET home page. */
//router.get('/', ctrlMain.index);

/* Locations pages*/
router.get('/', ctrlLocations.home);
router.get('/login', ctrlLocations.login);
router.get('/search', ctrlLocations.search);
router.get('/profile', ctrlLocations.profile);
//!!

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;