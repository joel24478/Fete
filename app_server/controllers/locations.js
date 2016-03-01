/* Get home/sign-up page */
module.exports.home = function(req, res) {
    res.render('sign-up', {
        title: 'Sign-Up', //Tab title
        pageTitle: 'Get Up-to-Date info on upcomming Parties!',
        background: '/images/signup_backgroundV2.jpg',
        legend: 'Join Fete Today',
        javascripts: [],
        stylesheets: [
            '/stylesheets/signup.css'
        ]
    });
};

/* Get login page */
module.exports.login = function(req, res) {
    res.render('login', {
        title: 'Login', //Tab title
        pageTitle: 'Whats New?',
        background: '/images/signup_backgroundV2.jpg',
        panelTitle: 'Login',
        javascripts: [],
        stylesheets: [
            '/stylesheets/login.css'
        ]
    });
};

/* GET search page */
module.exports.search = function(req, res) {
    res.render('search', {
        title: 'Search',
        subTitle: 'for the Party YOU want',
        background: '/images/black_purple.jpg',
        javascripts: [
            '/javascripts/dateHandler.js',
            '/javascripts/tabsHandler.js'
        ],
        stylesheets: [
            '/stylesheets/datepicker.css'
        ]
    });
};

/* GET follow page */
module.exports.followers = function(req, res) {
    res.render('follower', {
        title: 'Fete',
        subTitle: 'for the Party YOU want',
        profilePicture: 'https://farm7.staticflickr.com/6163/6195546981_200e87ddaf_b.jpg',
        username: 'Jessica',
        sharing: 'Public',
        eventDescription: 'The Party is going to be wild!',
        eventDate: 'Jun 27, 2016',
        background: '/images/black_purple.jpg',
        javascripts: [
            '/javascripts/mapHandler.js'
        ],
        stylesheets: [
            '/stylesheets/followers.css'
        ]
    });
};

/* GET profile page */
module.exports.profile = function(req, res) {
    res.render('profile', {
        title: 'Profile',
        username: 'Jessica',
        profilePicture: 'https://farm7.staticflickr.com/6163/6195546981_200e87ddaf_b.jpg',
        location: 'SAN ANTONIO, TX',
        twitter: '@' + 'COOLESOCOOL',
        followerCount: '2,784',
        followingCount: '456',
        reputationCount: '4,901',
        background: '/images/black_purple.jpg',
        javascripts: [
            '/javascripts/profile.js'
        ],
        stylesheets: [
            '/stylesheets/profile.css'
        ]
    });
};
/* GET event page */
module.exports.event = function(req, res) {
    res.render('event', {
        title: 'Event Details',
        username: 'Jessica',
        profilePicture: 'https://farm7.staticflickr.com/6163/6195546981_200e87ddaf_b.jpg',
        location: 'SAN ANTONIO, TX',
        eventTime: '11:00 PM',
        eventDate: '4/20/2016',
        details: 'Come if you want, but bring a bottle',
        flyer: '/images/august20lawrence.jpg',
        background: '/images/black_purple.jpg',
        javascripts: [],
        stylesheets: [
            '/stylesheets/event.css'
        ]
    });
};
/* GET create event page */
module.exports.createevent = function(req, res) {
    res.render('createevent', {
        title: 'Profile',
        username: 'Jessica',
        profilePicture: 'https://farm7.staticflickr.com/6163/6195546981_200e87ddaf_b.jpg',
        location: 'SAN ANTONIO, TX',
        twitter: '@' + 'COOLESOCOOL',
        followerCount: '2,784',
        followingCount: '456',
        reputationCount: '4,901',
        background: '/images/black_purple.jpg'
    });
};