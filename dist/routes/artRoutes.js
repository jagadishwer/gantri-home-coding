"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const express_validator_1 = require("express-validator");
const middlewares_1 = require("../middlewares");
const artRouter = (0, express_1.Router)();
artRouter
    .route('/')
    .get(controllers_1.ArtsController.prototype.getAllArt);
artRouter
    .route('/:art_id')
    .get(controllers_1.ArtsController.prototype.getIndividualArt);
artRouter
    .route('/:art_id/comments')
    .post([
    (0, express_validator_1.check)('content', 'Content to comment is required').notEmpty(),
    (0, express_validator_1.check)('user_id', 'user_id or Commentor name is required')
        .custom((value, { req }) => (value != null || req.body.name != null))
], middlewares_1.requestValidationMiddleware, controllers_1.ArtsController.prototype.commentOnIndividualArt);
exports.default = artRouter;
