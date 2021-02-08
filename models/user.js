module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
             validate: {
                len: [1]
            },  
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
           validate: {
                isEmail: true
            }, 
        },

    });

    return Users;
};