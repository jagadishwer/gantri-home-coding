"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
exports.default = (req, res, next) => {
    const result = (0, express_validator_1.validationResult)(req);
    if (!result.isEmpty()) {
        next({ statusCode: 422, code: 'unprocessable_entity', message: result.array().map(err => err.msg).join(', ') });
    }
    else
        next();
};
