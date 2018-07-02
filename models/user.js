module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {

        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
<<<<<<< HEAD
            allowNull: false,
            validate: {
                len: [1]
            }
=======
            allowNull: false
>>>>>>> cryptoLogin
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        dob: {
            type: DataTypes.STRING,
            allowNull: false
        },

        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },

        token: {
            type: DataTypes.STRING,
            allowNull: true
        }

    });

    User.associate = function (models) {
        User.hasMany(models.Post, {
            onDelete: "cascade"
        });
    };
    return User;
};