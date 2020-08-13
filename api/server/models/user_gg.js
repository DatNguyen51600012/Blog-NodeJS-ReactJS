'use strict';
module.exports = (sequelize, DataTypes) => {
    const user_gg = sequelize.define('user_gg', {
        user_id: DataTypes.STRING,
        access_token: DataTypes.STRING,
        expried_at: DataTypes.DATE,
        user_name: DataTypes.STRING
    }, {});
    user_gg.associate = function(models) {
        //user & user_fb
        // user_gg.hasOne(models.user);
        user_gg.hasOne(models.user, { foreignKey: 'user_id' })
    };
    return user_gg;
};