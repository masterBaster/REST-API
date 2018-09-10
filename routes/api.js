let express = require('express');
let router = express.Router();
let Driver = require('../models/drivers');

//get the list of dirvers from the db
router.get('/drivers', function(req, res){
    res.send({type: 'GET'});
});
//add a new driver to the db
router.post('/drivers', function(req, res){
    Driver.create(req.body).then(function(driver){
        res.send(driver);
    });
});
//update a driver in the db
router.put('/drivers/:id', function(req, res){
    res.send({type: 'PUT'});
});
//delete driver from the db
router.delete('/drivers/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;
