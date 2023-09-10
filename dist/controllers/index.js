"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = exports.ArtsController = void 0;
var artsController_1 = require("./artsController");
Object.defineProperty(exports, "ArtsController", { enumerable: true, get: function () { return __importDefault(artsController_1).default; } });
var usersController_1 = require("./usersController");
Object.defineProperty(exports, "UsersController", { enumerable: true, get: function () { return __importDefault(usersController_1).default; } });
