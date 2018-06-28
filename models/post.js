module.exports = function (sequelize, DataTypes) {

    var Post = sequelize.define("Post", {

        painIntensity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        medications: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        dosage: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        notes: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });
    return Post;
};