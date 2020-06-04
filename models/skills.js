module.exports = (sequelize, DataType) => {
    var Skills = sequelize.define("Skill", {
        title: {
            type: DataType.STRING,
            allowNull: false
        },
        certdate: {
            type: DataType.STRING,
            allowNull: false
        },
        awarder: {
            type: DataType.STRING,
            allowNull: false
        }
    })
    return Skills
};