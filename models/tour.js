'use strict';
module.exports = (sequelize, DataTypes) => {
  var tour = sequelize.define('tour', {
    name: DataTypes.STRING,
    owner: DataTypes.STRING,
    description: DataTypes.TEXT,
    imageUrl: DataTypes.STRING
  }, {});
  tour.associate = function(models) {
    models.tour.belongsToMany(models.location, {through: "toursLocations"});
    models.tour.belongsToMany(models.user, {through: "usersTours"});
  };
  return tour;
};
