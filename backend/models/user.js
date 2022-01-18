'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    bio: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        models.User.hasMany(models.Contenus);
      }
    }
  });
  return User;
};

/* class User extends Model {
  *
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   
  static associate(models) {
    // define association here
  }
}; */