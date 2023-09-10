import {Router} from 'express';
import {UsersController} from "../controllers";
import { check } from "express-validator";
import {requestValidationMiddleware} from "../middlewares";

const userRouter:Router = Router();

userRouter
    .route('/')
    .post(
        [
            check('name', 'Name should be String and Required').notEmpty(),
            check('age', 'age should be Integer and Required').notEmpty().isInt(),
            check('location', 'Location should be String and Required').notEmpty(),

        ], requestValidationMiddleware, UsersController.prototype.createNewUser)
    .get(UsersController.prototype.getAllUsers);

export  default userRouter;


