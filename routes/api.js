let express = require('express');
let router = express.Router();
let Driver = require('../models/drivers');

//get the list of dirvers from the db
router.get('/drivers', function(req, res, next){
    /*Driver.find({}).then(function(drivers){
        res.send(drivers);*/
        Driver.aggregate().near({
            near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
            maxDistance: 100000,
            spherical: true,
            distanceField: "dist.calculated"
           }).then(function(drivers){
            res.send(drivers);
        }).catch(next);
});

//add a new driver to the db
router.post('/drivers', function(req, res, next){
    Driver.create(req.body).then(function(driver){
        res.send(driver);
    }).catch(next);
});
//update a driver in the db
router.put('/drivers/:id', function(req, res, next){
    Driver.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Driver.findOne({_id: req.params.id}).then(function(driver){
            res.send(driver);
        });
    }).catch(next);
});
//delete driver from the db
router.delete('/drivers/:id', function(req, res, next){
    Driver.findByIdAndRemove({_id: req.params.id}).then(function(dirver){
        res.send(dirver);
    }).catch(next)
});

module.exports = router;
