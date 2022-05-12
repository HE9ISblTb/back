const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:trollotr@localhost:5432/testdb');

class UsersModels extends Model {}

UsersModels.init({
    login: {
        type: DataTypes.STRING,
        allow: false
    },
    password: {
        type: DataTypes.STRING,
        allow: false
    },
    created_date: {
        type: DataTypes.DATE,
        allow: false
    }
}, {
    sequelize,

    timestamps: false,

    tableName: 'users'
});

module.exports = UsersModels;