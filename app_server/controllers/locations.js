/* Get home/sign-up page */
module.exports.homeList = function(req, res) {
    res.render('sign-up', {
        title: 'Sign-Up', //Tab title
        pageTitle: 'Get Up-to-Date info on upcomming Parties!',
        background: '/images/signup_backgroundV2.jpg',
        legend: 'Join Fete Today'
    });
};

/* GET Location info page */
module.exports.locationInfo = function(req, res) {
    res.render('index', {
        title: 'Location Info'
    });
};

/* GET Add Review page */
module.exports.addReview = function(req, res) {
    res.render('index', {
        title: 'Add Review'
    });
};