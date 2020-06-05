module.exports = (sequelize, DataType) => {
var Educations = sequelize.define("Education", {
    instiution: {
        type: DataType.STRING,
        allowNull: false
     },
     field: {
        type: DataType.STRING,
        allowNull: false
     },
     strtDate: {
        type: DataType.DATE,
        allowNull: false
     },
     endDate: {
        type: DataType.DATE,
        allowNull: false
     }
  })
  return Educations;
};