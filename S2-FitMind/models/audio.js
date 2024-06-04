const {DataTypes} = require ('sequelize');
const sequelize = require ('../util/database');

const Audio = sequelize.define('Audio', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
    
module.exports = Audio;

  