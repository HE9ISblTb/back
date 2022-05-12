const UsersModel = require('../database/model/login_users');

class Login_Users {

    constructor() {
    }

    async signIn(req, res) {
        if (req.body.login && req.body.password) {
            const logins = await UsersModel.findOne({
                where: {
                    login: req.body.login,
                    password: req.body.password
                }
            });
            if (logins) {
                res.send({
                    code: 200,
                    message: 'User found'
                });
            } else {
                res.send({
                    code: 200,
                    message: 'User not found'
                });
            }
        } else {
            res.send({
                code: 500
            })
        }
    };

}

module.exports = Login_Users;