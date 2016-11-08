'use strict';

import express from 'express';
const router = express.Router();
import {Review, User} from '../db/models/index';

router.get('/', function(req, res, next){
    Review.findAll({
        include: { model: User}
    })
        .then(allReviews => res.send(allReviews))
        .catch(next);
});

router.get('/reviewId', function(req, res, next){
    Review.findById(req.params.reviewId)
        .then(foundReview => res.send(foundReview))
        .catch(next);
});

router.post('/create/:productId', function(req, res, next){
    Review.create({
        comment: req.body.comment,
        rating: req.body.rating,
        productId: req.params.productId,
        userId: req.session.userId
    })
        .then(createdReview => res.send(createdReview))
        .catch(next);
});

router.put('/reviewId', function(req, res, next){
    Review.findById(req.params.reviewId)
        .then(foundReview => foundReview.update(req.body))
        .then(updatedReview => res.send(updatedReview))
        .catch(next);
});

module.export = router;