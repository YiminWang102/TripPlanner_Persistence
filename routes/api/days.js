var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../../models').Hotel;
var Restaurant = require('../../models').Restaurant;
var Activity = require('../../models').Activity;
var Day = require('../../models').Day;

module.exports = router;


router.get('/', (req, res, next) => {
  console.log('hit route')
  Day.findAll({
    order: [
      ['number', 'ASC']
    ]
  })
    .then(days => {
      res.send(days);
    })
});


router.get('/:id', (req, res, next) => {
  Day.findOne(
    {
      where: {
        number: +req.params.id
      }
    }
  )
    .then( day => {
      res.json(day);
    })
});

router.post('/', (req, res, next) => {
  res.send('hi');
  Day.create({
    number: req.body.number
  })
  .then(day => {
    res.json(day);
  })
  .catch(console.error)

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
