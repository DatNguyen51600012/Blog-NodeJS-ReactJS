'use strict';
module.exports = (sequelize, DataTypes) => {
  const resource = sequelize.define('resource', {
    user_id: DataTypes.STRING,
    path: DataTypes.STRING,
    url: DataTypes.STRING,
    format: DataTypes.STRING,
    type: DataTypes.ENUM('jpg', 'png', 'mp4', 'avi')
  }, {});
  resource.associate = function(models) {
    // associations can be defined here
  };
  return resource;
};