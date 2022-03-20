const OwnersModel = require('../database/model/owners_animals');

class Owners_Animals {

    constructor() {
    }

    async getOwners(req, res) {
        const owners = await OwnersModel.findAll({
            where: {
                deleted_at: null
            }
        });
        res.send(owners);
    };

    async getOneAnimals(req, res) {
        try {
            const id = req.body.id;
            const owners = await  OwnersModel.findOne({
                where: {
                    nickname_animals: req.body.nickname_animals
                },
                attributes: ["nickname_animals",
                    "animal_species",
                    "gender_animals",
                    "photo_video",
                    "responsible_person",
                    "date_of_birth",
                    "vaccination",
                    "deworming",
                    "sterilization_castration",
                    "treatment",
                    "content_item",
                    "balance",
                    "documents",
                    "owner_animals",
                    "deleted_at"]
            });
            res.send(owners);
        } catch (err) {
            res.send({
                code: 500
            });
        }
    };

    async addOwners(req, res) {
        const owners = await OwnersModel.create({
                full_name: req.body.full_name,
                phone: req.body.phone,
                adress: req.body.adress,
                nickname_animals: req.body.nickname_animals,
                gender_animals: req.body.gender_animals,
                date_handed_over_to_owner: req.body.date_of_birth,
                return_date_reason: req.body.return_date_reason,
                deleted_at: null
        });
        if (owners) {
            res.send({
                code: 200
            });
        } else {
            res.send({
                code: 500
            });
        }
    };

    async deleteOwners(req, res) {
        const id = req.body.id;
        if (id) {
            const owners = await OwnersModel.update(
                {
                    deleted_at: Date().toLocaleString("ru")
                }, {
                    where: {
                        id: id,
                        deleted_at: null
                    }
                });
            if (owners) {
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
    async editFullName(req, res) {
        const id = req.body.id;
        if (id) {
            const owners = await OwnersModel.update(
                {
                    full_name: req.body.full_name
                }, {
                    where: {
                        id: id,
                        deleted_at: null
                    }
                });
            if (owners) {
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
    }

    async editNicknameAnimals(req, res) {
        const id = req.body.id;
        if (id) {
            const owners = await OwnersModel.update(
                {
                    nickname_animals: req.body.nickname_animals
                }, {
                    where: {
                        id: id,
                        deleted_at: null
                    }
                });
            if (owners) {
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


}

module.exports = Owners_Animals;