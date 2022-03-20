const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:trollotr@localhost:5432/testdb');

class OwnersModels extends Model {}

OwnersModels.init({
    full_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    adress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nickname_animals: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date_handed_over_to_owner: {
        type: DataTypes.DATE,
        allowNull: false
    },
    return_date_reason: {
        type: DataTypes.STRING,
        allowNull: false
    },
    deleted_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    sequelize,

    timestamps: false,

    tableName: 'owners_animals'
});

module.exports = OwnersModels;