"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unrestrictedSampleRouter = exports.restrictedSampleRouter = void 0;
const express_1 = require("express");
const restrictedRouter = (0, express_1.Router)();
exports.restrictedSampleRouter = restrictedRouter;
const unrestrictedRouter = (0, express_1.Router)();
exports.unrestrictedSampleRouter = unrestrictedRouter;
restrictedRouter
    .get('/samples/restricted-route', (request, response) => {
    response.json({ message: "Welcome to restricted Route" });
});
unrestrictedRouter
    .get('/samples/unrestricted-route', (request, response) => {
    response.json({ message: "Welcome to unrestricted Route" });
});
