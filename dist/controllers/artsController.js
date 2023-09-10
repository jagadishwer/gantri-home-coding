"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const Art_1 = require("../entity/Art");
const Comment_1 = require("../entity/Comment");
const artRepository = data_source_1.AppDataSource.getRepository(Art_1.Art);
const commentRepository = data_source_1.AppDataSource.getRepository(Comment_1.Comment);
class ArtsController {
    getAllArt(req, res, next) {
        artRepository
            .find({ relations: { comments: true } })
            .then(arts => res.json(arts))
            .catch(error => next(error));
    }
    getIndividualArt(req, res, next) {
        artRepository
            .findOne({ where: { id: parseInt(req.params.art_id) }, relations: { comments: true } })
            .then(art => res.json(art))
            .catch(error => next(error));
    }
    commentOnIndividualArt(req, res, next) {
        artRepository
            .findOneBy({ id: parseInt(req.params.art_id) })
            .then(art => {
            commentRepository
                .save(Object.assign(Object.assign({}, req.body), { art }))
                .then(comment => res.json(comment))
                .catch(error => next(error));
        }).catch(error => next(error));
    }
}
exports.default = ArtsController;
