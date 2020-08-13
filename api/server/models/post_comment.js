'use strict';
module.exports = (sequelize, DataTypes) => {
    const post_comment = sequelize.define('post_comment', {
        user_id: DataTypes.STRING,
        post_id: DataTypes.STRING,
        name: DataTypes.STRING,
        title: DataTypes.STRING,
        content: DataTypes.TEXT,
        image_path: DataTypes.STRING
    }, {});
    post_comment.associate = function(models) {
        //post & comment
        post_comment.belongsTo(models.post, 
            { foreignKey: 'post_id' }
            // , as
            );
        // post_comment.hasOne(post, { foreignKey: 'post_id' })

        //comment & user

    };
    return post_comment;
};