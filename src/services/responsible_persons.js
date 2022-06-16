const ResponsibleModel = require('../database/model/responsible_persons');

class Responsible_Persons {

    constructor() {
    }

    async getResponsible(req, res) {
        const responsible = await ResponsibleModel.findAll({
            where: {
                deleted_at: null
            },
            attributes: ["id", "full_name_responsible", "phone_responsible", "vkontakte_link", "deleted_at", "animal_id"]
        });
        res.send({
            code: 200,
            data: responsible
        });
    };

    async addResponsible(req, res) {
        const responsible = await ResponsibleModel.create({
            full_name_responsible: req.body.full_name_responsible,
            phone_responsible: req.body.phone_responsible,
            vkontakte_link: req.body.vkontakte_link,
            deleted_at: null
        });
        if (responsible) {
            res.send({
                code: 200
            });
        } else {
            res.send({
                code: 500
            });
        }
    };

    async deleteResponsible(req, res) {
        const id = req.body.id;
        if (id) {
            const responsible = await ResponsibleModel.update(
                {
                    deleted_at: Date().toLocaleString("ru")
                }, {
                    where: {
                        id: id,
                        deleted_at: null
                    }
                });
            if (responsible) {
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

    async editResponsible(req, res) {
        const id = req.body.id;
        const full_name_responsible = req.body.full_name_responsible;
        const phone_responsible = req.body.phone_responsible;
        const vkontakte_link = req.body.vkontakte_link;
        if (id) {
            const responsible = await ResponsibleModel.update(
                {
                    full_name_responsible: req.body.full_name_responsible,
                    phone_responsible: req.body.phone_responsible,
                    vkontakte_link: req.body.vkontakte_link,
                }, {
                    where: {
                        id: id,
                        deleted_at: null
                    }
                });
            if (responsible) {
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

module.exports = Responsible_Persons;