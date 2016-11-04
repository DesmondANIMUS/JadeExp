var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});

router.post('/send', function (req, res) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: '0incognitogaurav0@gmail.com',
            pass: 'desmond_ANIMUS12'
        }
    });

    var mailOptions = {
        from: ''+req.body.name+' <'+req.body.email+'>',
        to: '0incognitogaurav0@gmail.com',
        subject: 'Website submission',
        text: 'You have a new submission with the following details: Name: '+req.body.name+'',
        html: '<p>You got a mail with following details: </p> <ul><li>Name: '+req.body.name+'</li>' +
        '<li>Email: '+req.body.email+'</li>' +
        '<li>Message: '+req.body.message+'</li></ul>'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if(error){
            console.log(error);
            res.redirect('/');
        }else{
            console.log('Message sent' +info.message);
            res.redirect('/');
        }
    });
});
module.exports = router;

//Email: '+req.body.email+' Message: '+req.body.message+''