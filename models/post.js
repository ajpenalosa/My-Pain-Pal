module.exports = function (sequelize, DataTypes) {

    var Post = sequelize.define("Post", {

        pain_intensity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        pain_characteristics: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        pain_duration: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        medications: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        dosage: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        notes: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
    });

    Post.associate = function (models) {
        Post.belongsTo(models.User, {
            foreingKey: {
                allowNull: false
            }
        });
    };

    return Post;
};