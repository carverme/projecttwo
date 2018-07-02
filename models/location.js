'use strict';
var geocoder = require('geocoder');

module.exports = (sequelize, DataTypes) => {
  var location = sequelize.define('location', {
    tourId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    streetAddress: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT
  }, {
    hooks: {
      beforeCreate: function(location, options) {
        var place = location.streetAddress + location.city + location.state + location.zipCode;
        console.log('--before create');
        console.log('--Options ', options);
        geocoder.geocode(place, function(err, data) {
          console.log('--Start Geocoder')
          if (err) return err;
          console.log('--Geocoder geometry Data: ', data.results[0].geometry)
          location.lat = data.results[0].geometry.location.lat;
          location.lng = data.results[0].geometry.location.lng;
          location.save().then(function(){
            console.log('--Item Updated: ', place)
          })
        })
        console.log('---Outside of Geocoder')
      }
    }
  });
  location.associate = function(models) {
    models.location.belongsTo(models.tour);
    // associations can be defined here
  };
  return location;
};
