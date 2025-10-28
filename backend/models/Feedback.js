const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Feedback = sequelize.define('Feedback', {
  studentName: { type: DataTypes.STRING, allowNull: false },
  courseCode: { type: DataTypes.STRING, allowNull: false },
  comments: { type: DataTypes.TEXT },
  rating: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
    validate: { min: 1, max: 5 }
  }
}, {
  tableName: 'Feedbacks'
});

module.exports = Feedback;
