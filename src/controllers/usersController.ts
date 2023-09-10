import {Request, Response, NextFunction} from 'express';
import {User} from "../entity/User";
import {AppDataSource} from "../data-source";


const userRepository = AppDataSource.getRepository(User);

export default class UsersController{

    getAllUsers(req:Request, res:Response, next:NextFunction):void{
     userRepository
         .find()
         .then(users=>res.json(users))
         .catch(error=>next(error));
    }

    createNewUser(req:Request, res:Response, next:NextFunction):void{
        userRepository
            .save(req.body)
            .then(result=>res.json(result))
            .catch(error=>next(error));
    }

}
