const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Post extends Model {
    static upvote(body, models) {
        return models.Vote.create({
            user_id: body.user_id,
            post_id: body.post_id
        }).then(() => {
            return Post.findOne({
                where: {
                    id: body.post_id
                },
                attributes: [
                    'id',
                    'city_name',
                    'restaurant_name',
                    'restaurant_url',
                    'comment_text',
                    'photo',
                    'user_id',
                    'created_at',
                    [
                        sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'),
                        'likes_count'
                    ]
                ]
            });
        });
    }
}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        city_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        restaurant_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        restaurant_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isURL: true
            }
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // the comment must be at least 1 character long
                len: [1]
            }
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isURL: true
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

