import {Request, Response, NextFunction} from "express";
import { validationResult } from "express-validator";

export default (req:Request, res:Response, next:NextFunction)=>{
    const result = validationResult(req);
    if (!result.isEmpty()) {
        next({statusCode: 422, code: 'unprocessable_entity', message: result.array().map(err=>err.msg).join(', ')})
    }else
        next();
};
