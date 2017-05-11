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
    include: [Hotel, Restaurant, Activity],
    order: 'number ASC'
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

function getDay(dayNumber) {
  return Day.findOne( {
    where: {
      number: dayNumber
    }
  });
}
router.post('/:id/hotel', (req, res, next) => {
  var findingDay = getDay(req.params.id);
  var findingHotel = Hotel.findById(req.body.id);
  Promise.all([findingDay, findingHotel])
  .then((promArr) => {
    promArr[0].setHotel(promArr[1]);
  })
  .catch(next);
});

router.post('/:id/restaurant', (req, res, next) => {
  getDay(req.params.id)
  .then((day) => {
    day.addRestaurant(req.body.id);
  })
  .catch(next);
});

router.post('/:id/activity', (req, res, next) => {
  getDay(req.params.id)
  .then((day) => {
    day.addActivity(req.body.id);
  })
  .catch(next);
});


// router.get('/days/:id/hotels', (req, res, next) => {
//
// });
//
// router.get('/days/:id/hotels', (req, res, next) => {
//
// });
