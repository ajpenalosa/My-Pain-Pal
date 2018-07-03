module.exports = function (sequelize, DataTypes) {

    var Post = sequelize.define("Post", {

        body_part: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        pain_intensity: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        pain_characteristics: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        pain_duration: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        medications: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        dosage: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        notes: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
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