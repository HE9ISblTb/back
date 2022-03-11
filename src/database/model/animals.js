const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:trollotr@localhost:5432/testdb');

class AnimalsModels extends Model {}

AnimalsModels.init({
    // Model attributes are defined here
    nickname_animals: {
        type: DataTypes.STRING,
        allowNull: false
    },
    animal_species: {
        type: DataTypes.STRING,
        allowNull: true
    },
    gender_animals: {
        type: DataTypes.STRING,
        allowNull: true
    },
    photo_video: {
        type: DataTypes.STRING,
        allowNull: false
    },
    responsible_person: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false
    },
    vaccination: {
        type: DataTypes.STRING,
        allowNull: false
    },
    deworming: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sterilization_castration: {
        type: DataTypes.STRING,
        allowNull: false
    },
    treatment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content_item: {
        type: DataTypes.STRING,
        allowNull: false
    },
    balance: {
        type: DataTypes.STRING,
        allowNull: false
    },
    documents: {
        type: DataTypes.STRING,
        allowNull: false
    },
    owner_animals: {
        type: DataTypes.STRING,
        allowNull: false
    },
    deleted: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,

    timestamps: false,

    tableName: 'animals'
});

module.exports = AnimalsModels;
