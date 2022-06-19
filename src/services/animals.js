const AnimalsModel = require('../database/model/animals');
const {Sequelize, QueryTypes} = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:trollotr@localhost:5432/testdb');

class Animals {

    constructor() {
    }

    async getAnimals(req, res) {
        const animals = await AnimalsModel.findAll({
            where: {
                deleted_at: null
            },
            order: [
                ['id', 'ASC']
            ],
        });
        res.send({
            code: 200,
            data: animals
        });
    };

    async addAnimals(req, res) {
        const animals = await AnimalsModel.create({
            nickname_animals: req.body.nickname_animals,
            animal_species: req.body.animal_species,
            gender_animals: req.body.gender_animals,
            photo_video: req.body.photo_video,
            responsible_person: req.body.responsible_person,
            date_of_birth: req.body.date_of_birth,
            vaccination: req.body.vaccination,
            deworming: req.body.deworming,
            sterilization_castration: req.body.sterilization_castration,
            treatment: req.body.treatment,
            content_item: req.body.content_item,
            balance: req.body.balance,
            documents: req.body.documents,
            owner_animals: req.body.owner_animals,
            deleted_at: null
        });
        if (animals) {
            res.send({
                code: 200
            });
        } else {
            res.send({
                code: 500
            });
        }
    };

    async deleteAnimals(req, res) {
        const id = req.body.id;
        if (id) {
            const animals = await AnimalsModel.update(
                {
                    deleted_at: Date().toLocaleString("ru")
                }, {
                    where: {
                        id: id,
                        deleted_at: null
                    }
                });
            if (animals) {
                res.send({
                    code: 200
                });
            } else {
                res.send({
                    code: 500
                });
            }
        } else {
            res.send({
                code: 500
            });
        }
    }

    async editAnimals(req, res) {
        const id = req.body.id;
        const nickname_animals = req.body.nickname_animals;
        const animal_species = req.body.animal_species;
        const gender_animals = req.body.gender_animals;
        const photo_video = req.body.photo_video;
        const responsible_person = req.body.responsible_person;
        const date_of_birth = req.body.date_of_birth;
        const vaccination = req.body.vaccination;
        const deworming = req.body.deworming;
        const sterilization_castration = req.body.sterilization_castration;
        const treatment = req.body.treatment;
        const content_item = req.body.content_item;
        const balance = req.body.balance;
        const documents = req.body.documents;
        const owner_animals = req.body.owner_animals;
        if (id) {
            const animals = await AnimalsModel.update(
                {
                    nickname_animals: req.body.nickname_animals,
                    animal_species: req.body.animal_species,
                    gender_animals: req.body.gender_animals,
                    photo_video: req.body.photo_video,
                    responsible_person: req.body.responsible_person,
                    date_of_birth: req.body.date_of_birth,
                    vaccination: req.body.vaccination,
                    deworming: req.body.deworming,
                    sterilization_castration: req.body.sterilization_castration,
                    treatment: req.body.treatment,
                    content_item: req.body.content_item,
                    balance: req.body.balance,
                    documents: req.body.documents,
                    owner_animals: req.body.owner_animals
                }, {
                    where: {
                        id: id,
                        deleted_at: null
                    }
                });
            if (animals) {
                res.send({
                    code: 200
                });
            } else {
                res.send({
                    code: 500
                });
            }
        } else {
            res.send({
                code: 500
            })
        }
    };

    async fullAnimals(req, res) {
        const animalsId = req.body.id;
        const results = await sequelize.query(
            'SELECT * FROM animals JOIN content_items ON content_items.animal_id = animals.id JOIN owners_animals ON owners_animals.animal_id = animals.id JOIN responsible_persons ON responsible_persons.animal_id = animals.id WHERE animals.id = :animalsId',
            {
                replacements: {
                    animalsId: animalsId
                },
                type: QueryTypes.SELECT
            });
        if (results) {
            res.send({
                code: 200,
                data: results[0]
            });
        } else {
            res.send({
                code: 500
            });
        }
    };

}

module.exports = Animals;