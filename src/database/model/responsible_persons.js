const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:trollotr@localhost:5432/testdb');

class ResponsibleModels extends Model {
}

ResponsibleModels.init({
    full_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    vkontakte_link: {
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

    tableName: 'responsible_persons'
});

module.exports = ResponsibleModels;