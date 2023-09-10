"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const csv_parse_1 = require("csv-parse");
require("dotenv/config");
const data_source_1 = require("../data-source");
const Art_1 = require("../entity/Art");
const artRepository = data_source_1.AppDataSource.getRepository(Art_1.Art);
data_source_1.AppDataSource.initialize().then(() => {
    fs_1.default.createReadStream("./src/tasks/the-tate-collection.csv")
        .pipe((0, csv_parse_1.parse)({ delimiter: ";",
        columns: true,
        trim: true }))
        .on("data", (record) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield artRepository.save({ title: record.title, artist: record.artist, year: record.year });
        }
        catch (error) {
            // console.log("Invaild record")
        }
    })).on("end", () => {
        console.log("Successfully loaded records");
        // file size is too big, i'm intentionally closing before loading all data;
        data_source_1.AppDataSource.close();
    });
}).catch(error => console.log(error));
