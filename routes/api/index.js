var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../../models').Hotel;
var Restaurant = require('../../models').Restaurant;
var Activity = require('../../models').Activity;

module.exports = router;

router.get('/', (req, res, next) => {
  res.send('hit routes/api/index.js');
});

router.get('/hotels', (req, res, next) => {
  Hotel.findAll().then(hotels => {
    res.json(hotels);
  })
  .catch(next);
});

router.get('/restaurants', (req, res, next) => {
  Restaurant.findAll().then(restaurants => {
    res.json(restaurants);
  })
  .catch(next);
});

router.get('/activities', (req, res, next) => {
  Activity.findAll().then(activities => {
    res.json(activities);
  })
  .catch(next);
});

router.use('/days', require('./days'));
