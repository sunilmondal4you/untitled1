/**
 * Created by abc on 25/05/2016.
 */
var express = require('express');
var router = express.Router();

router.get('/a',function(req,res) {
    res.send("Hello World!");
});

router.get('/a/b/c/d/e',function(req,res) {
    var name=req.query.name;
    var email=req.query.email;
    res.send("Hello "+name+" your email id is "+email);
});


module.exports = router;