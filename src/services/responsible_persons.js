const ResponsibleModel = require('../database/model/responsible_persons');

class Responsible_Persons {

    constructor() {
    }

    async getResponsible(req, res) {
        const responsible = await ResponsibleModel.findAll({
            where: {
                deleted_at: null
            },
            attributes: ["id", "full_name", "phone", "vkontakte_link", "deleted_at"]
        });
        res.send({
            code: 200,
            data: responsible
        });
    };

    async addResponsible(req, res) {
        const responsible = await ResponsibleModel.create({
            full_name: req.body.full_name,
            phone: req.body.phone,
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
        console.log(id);
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

    //И таких много, на каждое поле таблицы
    async editResponsible(req, res) {
        const id = req.body.id;
        const full_name = req.body.full_name;
        const phone = req.body.phone;
        const vkontakte_link = req.body.vkontakte_link;
        if (id) {
            const responsible = await ResponsibleModel.update(
                {
                    full_name: req.body.full_name,
                    phone: req.body.phone,
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

    async editVkontakteLink(req, res) {
        const id = req.body.id;
        if (id) {
            const responsible = await ResponsibleModel.update(
                {
                    vkontakte_link: req.body.vkontakte_link
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


}

module.exports = Responsible_Persons;