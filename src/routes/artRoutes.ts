import {Router} from 'express';
import {ArtsController} from "../controllers";
import { check} from "express-validator";
import {requestValidationMiddleware} from "../middlewares";


const artRouter:Router = Router();

artRouter
    .route('/')
    .get(ArtsController.prototype.getAllArt)

artRouter
    .route('/:art_id')
    .get(ArtsController.prototype.getIndividualArt)

artRouter
    .route('/:art_id/comments')
    .post([
         check('content', 'Content to comment is required').notEmpty(),
         check('user_id', 'user_id or Commentor name is required')
             .custom((value, { req }) =>  (value !=null || req.body.name != null) )
        ], requestValidationMiddleware, ArtsController.prototype.commentOnIndividualArt)
export default artRouter;
