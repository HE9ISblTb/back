const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:trollotr@localhost:5432/testdb');

class ResponsibleModels extends Model {
}

ResponsibleModels.init({
    full_name_responsible: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone_responsible: {
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
    },
    animal_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,

    timestamps: false,

    tableName: 'responsible_persons'
});

module.exports = ResponsibleModels;