module.exports = (sequelize, DataType) => {
    var WorkHistorys = sequelize.define("WorkHistory", {
        nameComp: {
            type: DataType.STRING,
            allowNull: false
        },
        title: {
            type: DataType.STRING,
            allowNull: false
        },
        startDate: {
            type: DataType.STRING,
            allowNull: false
        },
        endDate: {
            type: DataType.STRING,
            allowNull: false
        },
        description: {
            type: DataType.STRING,
            allowNull: false
        },
        nameComp2: {
            type: DataType.STRING,
            allowNull: false
        },
        title2: {
            type: DataType.STRING,
            allowNull: false
        },
        startDate2: {
            type: DataType.STRING,
            allowNull: false
        },
        endDate2: {
            type: DataType.STRING,
            allowNull: false
        },
        description2: {
            type: DataType.STRING,
            allowNull: false
        }
    })
    return WorkHistorys
};