'use strict'

const express = require('express');
const router = express.Router();
const Order = require('APP/db/models/order')
const Product = require('APP/db/models/product')


//retrieve all orders filtered by userId
router.get('/:userId', (req, res, next) => {
  Order.findAll({ where: {userId: req.params.userId}})
      .then(fetchedUserOrders => res.send(fetchedUserOrders))
      .catch(next);
})


//retrieve specific order by order Id
// this will fetch only ONE product
router.get('/:orderId', (req, res, next) => {
  Order.findById(req.params.orderId)
      .then(fetchedOrder => res.send(fetchedOrder))
      .catch(next);
})


router.post('/create', (req, res, next) => {
  /*EX)
  req.body = {
    product_id: 5,
    user_id: 1,
    quantity: 3,
    status: 'processing'
  }
  */

  Order.create(req.body)
    .then(createdOrder => res.send(createdOrder))
    .catch(next);
})


router.put('/:orderId', (req, res, next) => {
  Order.findById(req.params.orderId)
      .then(foundOrder => foundOrder.update(req.body))
      .then(updatedOrder => res.send(updatedOrder))
      .catch(next);
})


router.post('/remove', (req, res, next) => {
  Order.destroy(req.body.orderId)
    .then(() => res.sendStatus(204))
    .catch(next);
})


module.exports = router;