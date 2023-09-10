import {Request, Response, NextFunction} from "express";
import {AppDataSource} from "../data-source";
import {Art} from "../entity/Art";
import {Comment} from "../entity/Comment";

const artRepository = AppDataSource.getRepository(Art);
const commentRepository = AppDataSource.getRepository(Comment);

export default class ArtsController{

    getAllArt(req:Request, res:Response, next:NextFunction){
        artRepository
            .find({relations: {comments: true}})
            .then(arts=>res.json(arts))
            .catch(error=>next(error));
    }

    getIndividualArt(req:Request, res:Response, next:NextFunction){
        artRepository
            .findOne({where: {id: parseInt(req.params.art_id)}, relations: {comments: true}})
            .then(art=>res.json(art))
            .catch(error=>next(error));
    }

    commentOnIndividualArt(req:Request, res:Response, next:NextFunction){
        artRepository
            .findOneBy({id: parseInt(req.params.art_id)})
            .then(art => {
                commentRepository
                    .save({...req.body, art})
                    .then(comment => res.json(comment))
                    .catch(error => next(error));
            }).catch(error => next(error));
    }

}
