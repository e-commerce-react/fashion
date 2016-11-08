'use strict'

const express = require('express');
const router = express.Router();
import {Product, Review} from '../db/models/index';

//retrieve all products
router.get('/', function(req, res, next){
    Product.findAll()
        .then(allProducts => res.send(allProduct))
        .catch(next);
})

//retrieve specific product based on ID
router.get('/:productId', function(req, res, next){
    Product.findById({
        where: {
            id: req.params.productId,
            include: {model: Review}
        }
    })
        .then(foundProduct => res.send(foundProduct))
        .catch(next);
})

//create new product
router.post('/create', function(req, res, next){
    Product.create(req.body)
        .then(createdProduct => res.send(createdProduct))
        .catch(next);
});

//modify a specific product based on ID
router.put('/:productId', function(req, res, next){
    Product.findById(req.params.productId)
        .then(foundProduct => foundProduct.update(req.body))
        .then(updatedProduct => res.send(updatedProduct))
        .catch(next);
})

module.exports = router;