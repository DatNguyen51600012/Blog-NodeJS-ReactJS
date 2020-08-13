'use strict';
module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define('category', {
        post_id: DataTypes.STRING,
        type: DataTypes.STRING,
        title: DataTypes.STRING,
        summary: DataTypes.STRING,
        content: DataTypes.TEXT,
        image_path: DataTypes.STRING
    }, {});
    category.associate = function(models) {
        // associations can be defined here
    };
    return category;
};