const ContentModel = require('../database/model/content_items');

class Content_Items {

    constructor() {
    }

    async getContent(req, res) {
        const content = await ContentModel.findAll({});
        res.send(content);
    };

    async addContent(req, res) {
        const content = await ContentModel.create({
            name_content: req.body.name_content,
            full_name_owner: req.body.full_name_owner,
            phone: req.body.phone,
            payment: req.body.payment,
            deleted_at: req.body.deleted_at
        });
        console.log(content);
        if (content) {
            res.send({
                code: 200
            });
        } else {
            res.send({
                code: 500
            });
        }
    };

    async deleteContent(req, res) {
        const id = req.body.id;
        if (id) {
            const content = await ContentModel.update(
                {
                    deleted_at: Date().toLocaleString("ru")
                }, {
                    where: {
                        id: id,
                        deleted_at: null
                    }
                });
            if (content) {
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
    async fullNameOwner(req, res) {
        const id = req.body.id;
        if (id) {
            const content = await ContentModel.update(
                {
                    full_name_owner: req.body.full_name_owner
                }, {
                    where: {
                        id: id,
                        deleted_at: null
                    }
                });
            if (content) {
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

    async Phone(req, res) {
        const id = req.body.id;
        if (id) {
            const content = await ContentModel.update(
                {
                    phone: req.body.phone
                }, {
                    where: {
                        id: id,
                        deleted_at: null
                    }
                });
            if (content) {
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

module.exports = Content_Items;