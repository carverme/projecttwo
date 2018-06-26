'use strict';
var bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    firstName: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1,99],
          msg: "Invalid name.  Must be between 1 and 99 characters."
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1,99],
          msg: "Invalid name.  Must be between 1 and 99 characters."
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "Invalid email address."
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [8,99],
          msg: "Password must be at least 8 characters."
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: function(pendingUser, options) {
        if (pendingUser && pendingUser.password) {
          var hash = bcrypt.hashSync(pendingUser.password, 10);
          pendingUser.password = hash;
        }
      }
      }
      });

      user.associate = function(models) {
        models.user.belongsToMany(models.tour, {through: "usersTours"});
      };
      //this checks the entered password against the database hashed password.
      user.prototype.validPassword = function(passwordTyped) {
      return bcrypt.compareSync(passwordTyped, this.password);
      };
      //This removes the password from the user object for serializing.
      //function that will convert to javascript notation, uses no parameters.
      user.prototype.toJSON = function() {
      var userData = this.get();
      delete userData.password;
      return userData;
      };

      return user;
      };
