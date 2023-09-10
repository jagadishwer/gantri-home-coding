import fs from 'fs';
import {parse} from "csv-parse";
import 'dotenv/config';
import {AppDataSource} from "../data-source";
import {Art} from "../entity/Art";
const artRepository = AppDataSource.getRepository(Art);

AppDataSource.initialize().then(() => {
    fs.createReadStream("./src/tasks/the-tate-collection.csv")
        .pipe(parse({ delimiter: ";",
            columns: true,
            trim: true }))
        .on("data", async (record)=> {
            try{
                await artRepository.save({title: record.title,artist: record.artist, year: record.year })
            }catch(error) {
                // console.log("Invaild record")
            }
        }).on("end", ()=>{
            console.log("Successfully loaded records")
            // file size is too big, i'm intentionally closing before loading all data;
            AppDataSource.close();
        })
}).catch(error => console.log(error))


