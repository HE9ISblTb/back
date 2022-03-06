const AnimalsModel = require('../database/model/animals');

class Animals {

    constructor() {
    }

    async getAnimals(req, res) {
        const animals = await AnimalsModel.findAll({});
        res.send(animals);
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
            check_on_delete: req.body.check_on_delete,
        });
        console.log(animals);
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
                    check_on_delete: Date().toLocaleString("ru")
                }, {
                    where: {
                        id: id,
                        check_on_delete: null
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

    //И таких много, на каждое поле таблицы
    async responsibleFIO(req, res) {
        const id = req.body.id;
        if (id) {
            const animals = await AnimalsModel.update(
                {
                    responsible_person: req.body.responsible_person
                }, {
                    where: {
                        id: id
                    }
                });
        } else {
            res.send({
                code: 500
            })
        }
    }


}

module.exports = Animals;