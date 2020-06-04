module.exports = (sequelize, DataType) => {
    var Users = sequelize.define("User", {
        fullName: {
            type: DataType.STRING,
            allowNull: false
        },
        job_title: {
            type: DataType.STRING,
            allowNull: false
        },
        email: {
            type: DataType.STRING,
            allowNull: false
        },
        phone: {
            type: DataType.STRING,
            allowNull: false
        },
        street: {
            type: DataType.STRING,
            allowNull: false
        },
        country: {
            type: DataType.STRING,
            allowNull: false
        },
        ustate: {
            type: DataType.STRING,
            allowNull: false
        },
        city: {
            type: DataType.STRING,
            allowNull: false
        },
        zip: {
            type: DataType.INTEGER,
            allowNull: false
        },
        network: {
            type: DataType.STRING,
            allowNull: false
        },
        net_username: {
            type: DataType.STRING,
            allowNull: false
        },
        siteurl: {
            type: DataType.STRING,
            allowNull: false
        }


    })
    return Users;
};