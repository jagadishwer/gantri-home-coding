"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const artRoutes_1 = __importDefault(require("./artRoutes"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const appRouter = (0, express_1.Router)();
appRouter.use('/art', artRoutes_1.default);
appRouter.use('/users', userRoutes_1.default);
exports.default = appRouter;
