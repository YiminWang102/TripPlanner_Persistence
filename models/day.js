var Sequelize = require('sequelize');
var db = require('./_db');

Day = db.define('day', {
  number: Sequelize.INTEGER
},
{
  instanceMethods: {

  }
});

module.exports = Day;
