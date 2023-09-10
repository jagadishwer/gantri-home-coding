"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const data_source_1 = require("./data-source");
const routes_1 = __importDefault(require("./routes"));
//declaring the Variables
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const base_path = process.env.BASE_PATH || '/api';
//initializing Database
data_source_1.AppDataSource.initialize().then(() => {
    console.log("DB Setup Done");
}).catch(error => console.log(error));
app.use(express_1.default.json());
app.use(base_path, routes_1.default);
//global error handling
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 400)
        .json({ code: err.code, message: err.message });
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
