'use strict';
module.exports = (sequelize, DataTypes) => {
    const postTag = sequelize.define('postTag', {
        post_id: DataTypes.STRING
    }, {});
    postTag.associate = function(models) {
        // associations can be defined here
    };
    return postTag;
};