var express = require('express');
var db = require('../models');
var router = express.Router();
var isLoggedIn = require('../middleware/isLoggedIn');

//POST - NEW location on a specific tour:id
router.post('/:id', function(req, res) {
  console.log("HITTING POST /LOCATION/...");
  db.tour.findOne({
    where: {id: req.params.id}
  }).then(function(tour){
  tour.createLocation({
    name: req.body.name,
    streetAddress: req.body.streetAddress,
    city: req.body.city,
    state: req.body.state,
    zipCode: req.body.zipCode
  }).then(function(data) {
    console.log("HITTING /LOCATION/NEW...");
    res.redirect('/tours/' + tour.id);
  }).catch(function(err) {
     console.log(err);
  });
  })
});

//DELETE route to delete specific locations.
router.delete('/:tourid/:locid', function(req, res) {
  console.log('hitting DELETE route');
  db.location.destroy({
    where: {id: req.params.locid}
  }).then(function(result) {
    console.log(result);
    res.sendStatus(200);
  });
});

 module.exports = router;
