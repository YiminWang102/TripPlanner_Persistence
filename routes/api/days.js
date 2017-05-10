var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../../models').Hotel;
var Restaurant = require('../../models').Restaurant;
var Activity = require('../../models').Activity;
var Day = require('../../models').Day;

module.exports = router;


router.get('/', (req, res, next) => {
  Day.findAll()
    .then(days => {
      res.json(days);
    })
});

router.get('/:id', (req, res, next) => {
  Day.findById(req.params.id)
    .then( day => {
      res.json(day);
    })
});

router.post('/', (req, res, next) => {
  res.send('hi');
});

router.post('/:id/hotels', (req, res, next) => {

});

// router.get('/days/:id/hotels', (req, res, next) => {
//
// });
//
// router.get('/days/:id/hotels', (req, res, next) => {
//
// });
