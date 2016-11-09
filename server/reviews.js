'use strict';

const express = require('express')
const router = express.Router();
const Review = require('APP/db/models/review')
const User = require('APP/db/models/user')

router.get('/', function(req, res, next){
    Review.findAll({
        include: { model: User}
    })
        .then(allReviews => res.send(allReviews))
        .catch(next);
});

router.get('/:reviewId', function(req, res, next){
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

router.put('/:reviewId', function(req, res, next){
    Review.findById(req.params.reviewId)
        .then(foundReview => foundReview.update(req.body))
        .then(updatedReview => res.send(updatedReview))
        .catch(next);
});

module.exports = router;