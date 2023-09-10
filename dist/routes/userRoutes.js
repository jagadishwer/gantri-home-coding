"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const express_validator_1 = require("express-validator");
const middlewares_1 = require("../middlewares");
const userRouter = (0, express_1.Router)();
userRouter
    .route('/')
    .post([
    (0, express_validator_1.check)('name', 'Name should be String and Required').notEmpty(),
    (0, express_validator_1.check)('age', 'age should be Integer and Required').notEmpty().isInt(),
    (0, express_validator_1.check)('location', 'Location should be String and Required').notEmpty(),
], middlewares_1.requestValidationMiddleware, controllers_1.UsersController.prototype.createNewUser)
    .get(controllers_1.UsersController.prototype.getAllUsers);
exports.default = userRouter;
