const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:trollotr@localhost:5432/testdb');

class UsersModels extends Model {}

UsersModels.init({
    login_users: {
        type: DataTypes.STRING,
        allow: false
    },
    password_users: {
        type: DataTypes.STRING,
        allow: false
    },
    create_date: {
        type: DataTypes.DATE,
        allow: false
    }
}, {
    sequelize,

    timestamps: false,

    tableName: 'users'
});

module.exports = UsersModels;