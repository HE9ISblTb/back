const UsersModel = require('../database/model/login_users');

class Login_Users {

    constructor() {
    }

    async getUsersLoginOne(req, res) {
        const login = req.body.login_users;
        const password = req.body.password_users;
        if (login & password) {
            const logins = await UsersModel.findOne({
                where: {
                    login: req.body.login_users,
                    password: req.body.password_users
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