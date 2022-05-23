const ContentModel = require('../database/model/content_items');

class Content_Items {

    constructor() {
    }

    async getContent(req, res) {
        const content_items = await ContentModel.findAll({
            where: {
                deleted_at: null
            },
            attributes: ['id', 'name_content', 'full_name_owner', 'phone', 'payment', 'deleted_at']
        });
        res.send({
            code: 200,
            data: content_items
        });
    };

    async addContent(req, res) {
        const content = await ContentModel.create({
            name_content: req.body.name_content,
            full_name_owner: req.body.full_name_owner,
            phone: req.body.phone,
            payment: req.body.payment,
            deleted_at: null
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