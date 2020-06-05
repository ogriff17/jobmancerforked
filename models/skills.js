module.exports = (sequelize, DataType) => {
    var Skills = sequelize.define("Skill", {
       skillName: {
          type: DataType.STRING,
          allowNull: false
       },
       skillLevel: {
          type: DataType.STRING,
          allowNull: false
       },
       keyword: {
          type: DataType.STRING,
          allowNull: false
       }
    })
    return Skills;
 };