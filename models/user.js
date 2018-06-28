module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {

        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        dob: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });

    User.associate = function(models){
        User.hasMany(models.Post, {
            onDelete: "cascade"
        });
    };
    return User;
};