module.exports = (sequelize, DataType) => {
var Extras = sequelize.define("Extra", {
    org: {
        type: DataType.STRING,
        allowNull: false
     },
     pos: {
        type: DataType.STRING,
        allowNull: false
     },
     website: {
        type: DataType.STRING,
        allowNull: false
     },
     strtDate: {
        type: DataType.STRING,
        allowNull: false
     },
     endDate: {
        type: DataType.INTEGER,
        allowNull: true
     }
  })
  return Extras;
};