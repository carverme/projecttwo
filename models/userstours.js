'use strict';
module.exports = (sequelize, DataTypes) => {
  var usersTours = sequelize.define('usersTours', {
    userId: DataTypes.INTEGER,
    tourId: DataTypes.INTEGER
  }, {});
  usersTours.associate = function(models) {
    // associations can be defined here
  };
  return usersTours;
};