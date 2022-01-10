'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  let Contenu = sequelize.define('Contenu', {
    idUSERS: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    attachment: DataTypes.STRING,
    likes: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.Contenu.belongTo(models.User, {
          foreignKey:{
            allowNull: false
          }
        })
      }
    }
  });
  return Contenu;
};