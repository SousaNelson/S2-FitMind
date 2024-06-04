const {DataTypes} = require ('sequelize');
const sequelize = require ('../util/database');

const Appointment = sequelize.define('Appointment', {
    pacienteId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    profissionalId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
});
  
module.exports = Appointment;

