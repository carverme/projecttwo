'use strict';
module.exports = (sequelize, DataTypes) => {
  var tour = sequelize.define('tour', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    imageUrl: DataTypes.STRING
  }, {});
  tour.associate = function(models) {
    models.tour.belongsTo(models.user);
    models.tour.hasMany(models.location);
        // associations can be defined here
  };
  return tour;
};
