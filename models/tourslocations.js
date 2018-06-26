'use strict';
module.exports = (sequelize, DataTypes) => {
  var toursLocations = sequelize.define('toursLocations', {
    tourId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER
  }, {});
  toursLocations.associate = function(models) {
    // associations can be defined here
  };
  return toursLocations;
};