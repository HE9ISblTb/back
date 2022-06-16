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
        res.send({
            code: 200,
            data: owners
        });
    };

    async addOwners(req, res) {
        const owners = await OwnersModel.create({
            full_name: req.body.full_name,
            phone_owners: req.body.phone_owners,
            adress: req.body.adress,
            nickname_animals: req.body.nickname_animals,
            gender_animals: req.body.gender_animals,
            date_handed_over_to_owner: req.body.date_handed_over_to_owner,
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

    async editOwners(req, res) {
        const id = req.body.id;
        const full_name = req.body.full_name;
        const phone_owners = req.body.phone_owners;
        const adress = req.body.adress;
        const nickname_animals = req.body.nickname_animals;
        const gender_animals = req.body.gender_animals;
        const date_handed_over_to_owner = req.body.date_of_birth;
        const return_date_reason = req.body.return_date_reason;
        if (id) {
            const owners = await OwnersModel.update(
                {
                    full_name: req.body.full_name,
                    phone_owners: req.body.phone_owners,
                    adress: req.body.adress,
                    nickname_animals: req.body.nickname_animals,
                    gender_animals: req.body.gender_animals,
                    date_handed_over_to_owner: req.body.date_of_birth,
                    return_date_reason: req.body.return_date_reason
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

}

module.exports = Owners_Animals;