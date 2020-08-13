'use strict';
module.exports = (sequelize, DataTypes) => {
    const role = sequelize.define('role', {
        name: DataTypes.STRING,
        description: DataTypes.STRING
    }, {});
    role.associate = function(models) {
        //role belongs to uer
        role.belongsTo(models.user);
    };
    return role;
};