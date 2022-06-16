const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:trollotr@localhost:5432/testdb');

class ContentModels extends Model {
}

ContentModels.init({
    name_content: {
        type: DataTypes.STRING,
        allowNull: true
    },
    full_name_owner: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone_content_items: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    payment: {
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

    tableName: 'content_items'
});

module.exports = ContentModels;
