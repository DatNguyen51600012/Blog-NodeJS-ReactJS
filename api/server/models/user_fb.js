'use strict';
module.exports = (sequelize, DataTypes) => {
    const user_fb = sequelize.define('user_fb', {
        user_id: DataTypes.STRING,
        access_token: DataTypes.STRING,
        expried_at: DataTypes.DATE,
        user_name: DataTypes.STRING
    }, {});
    user_fb.associate = function(models) {
        //user & user_fb
        // user_fb.hasOne(models.user);
        user_fb.hasOne(models.user, { foreignKey: 'user_id' })
    };
    return user_fb;
};