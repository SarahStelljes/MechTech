const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Post model
class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
                max: [100]
            }
        },
        post_text: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [4],
                max: [2000]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;