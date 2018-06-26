'use strict';
module.exports = (sequelize, DataTypes) => {
  var location = sequelize.define('location', {
    name: DataTypes.STRING,
    streetAddress: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    long: DataTypes.FLOAT
  }, {});
  location.associate = function(models) {
    models.location.belongsToMany(models.tour, {through: "toursLocations"});
  };
  return location;
};
