var express = require('express');
var router = express.Router();
var User = require('../db/User');




module.exports = function (passport) {
    router.post('/signup', function (req, res){
        var body = req.body,
            username = body.username,
            password = body.password;
            first_name = body.first_name;
            last_name = body.last_name;
            email = body.email;
        User.findOne({username:username},function(err,doc){
            if(err) {res.status(500).send('error occured')}
            else {
                if(doc) {
                    res.status(500).send('Username Exists')
                }
                else {
                    var record = new User()
                    record.username = username;
                    record.password = record.hashPassword(password)
                    record.first_name = body.first_name;
                    record.last_name = body.last_name;
                    record.email = body.email;
                    record.save(function(err,user){
                        if(err) {
                            res.status(500).send('DB Error')
                        } else {
                            res.render('index')
                        }

                    })
                }
            }
        })
    });

    router.post('/login',passport.authenticate('local',{
        failureRedirect:'/login',
        successRedirect:'/profile',
    }),function(req,res) {
        res.send('Hello there sexy!')
    })
    return router;
};
