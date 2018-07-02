var express = require('express');
var db = require('../models');
var router = express.Router();
var isLoggedIn = require('../middleware/isLoggedIn');

// router.get('/show', isLoggedIn, function(req, res) {
//   console.log('hitting GET /tour/show')
//   res.render('show');
// });

router.post('/', function(req, res) {
  db.tour.create({
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl
  }).then(function(tour) {
    res.redirect('/tours/' + tour.id);
  }).catch(function(err) {
  });
});

router.get('/:id', function(req, res) {
  console.log('HITTING GET /tours/:id...')
  db.tour.findById(req.params.id).then(function(tour) {
      db.location.findAll({
        where: {
          tourId: tour.id}
  }).then(function(locations) {
    res.render('show', {tour: tour, locations: locations})
    });
  });
});


router.put('/:id', function(req, res) {
  console.log('HITTING PUT on the Tours...');
  console.log(req.body.upname)
  db.tour.update({
  name: req.body.upname,
  description: req.body.updescription,
  imageUrl: req.body.upimageUrl
    }, {
      where: {id: req.params.id}
      }).then(function(data){
        console.log('end of put route');
        res.send(data);
      });
});




// //<--------------Delete Route-------------->
 // router.delete('tours/:id', function(req,res) {
 //    console.log("Hitting delete route...TOURS!!!")
 //   db.tour.destroy({
 //     where: {id: req.params.id}  //Could also need the specific... TourId or userId
 //   }).then(function(data) {
 //     console.log(data);
 //     res.sendStatus(200);
 //   });
 // });
//<--------------Delete Route End-------------->


module.exports = router;
