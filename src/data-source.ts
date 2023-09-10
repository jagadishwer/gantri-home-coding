import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import {Art} from "./entity/Art";
import {Comment} from "./entity/Comment";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306"),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: true,
    entities: [User, Art, Comment]
})
