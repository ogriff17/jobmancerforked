module.exports = (sequelize, DataType) => {
    var Users = sequelize.define("User", {
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
    return Users;
};