module.exports = function (sequelize, DataTypes) {
    var Songs = sequelize.define("Songs", {
        song_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            },
        },

        artist: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            },
        },

        album: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            },
        },

        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [4]
            },
        },

        genre: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });

    return Songs;
    
};