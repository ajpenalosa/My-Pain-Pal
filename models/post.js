module.exports = function (sequelize, DataTypes) {

    var Post = sequelize.define("Post", {

        pain_intensity: {
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

    Post.associate = function(models){
        Post.belongsTo(models.User, {
            foreingKey: {
                allowNull: false
            }
        });
    };
    
    return Post;
};