"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../entity/User");
const data_source_1 = require("../data-source");
const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
class UsersController {
    getAllUsers(req, res, next) {
        userRepository
            .find()
            .then(users => res.json(users))
            .catch(error => next(error));
    }
    createNewUser(req, res, next) {
        userRepository
            .save(req.body)
            .then(result => res.json(result))
            .catch(error => next(error));
    }
}
exports.default = UsersController;
