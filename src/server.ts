import express, {Application, Request, Response, NextFunction} from 'express';
import 'dotenv/config';

import { AppDataSource } from "./data-source"
import appRouter from './routes';

//declaring the Variables
const app: Application =  express();
const port:number|string = process.env.PORT || 3000;
const base_path:string = process.env.BASE_PATH || '/api';

//initializing Database
AppDataSource.initialize().then(() => {
    console.log("DB Setup Done")
}).catch(error => console.log(error))



app.use(express.json());
app.use(base_path, appRouter);

//global error handling
app.use((err:any, req:Request, res:Response, next:NextFunction) => {
    console.error(err)
    res.status(err.statusCode|| 400)
        .json({code: err.code, message: err.message})
})

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
