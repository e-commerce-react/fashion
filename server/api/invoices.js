'use strict'

const express = require('express');
const router = express.Router();
const Invoice = require('APP/db/models/invoice')


//retrieve all invoices filtered by userId
router.get('/:userId', (req, res, next) => {
  Invoice.findAll({ where: {userId: req.params.userId}})
      .then(fetchedUserInvoices => res.send(fetchedUserInvoices))
      .catch(next);
})


//retrieve specific invoice by invoice Id
router.get('/:invoiceId', (req, res, next) => {
  Invoice.findById(req.params.invoiceId)
      .then(fetchedInvoice => res.send(fetchedInvoice))
      .catch(next);
})


router.post('/create', (req, res, next) => {
  let invoice;

  Invoice.create(req.body.invoice)
    .then(createdInvoice => {
      // res.send(createdInvoice)
      let orders = req.body.orders; //req.body.orders => [oId, oId, oId, oId];
      invoice = createdInvoice;
      let associating = (id) => Order.findBy(id)
  })
  .then((order) => {
    order.setInvoice(invoice.id);
  })
    .catch(next);
})


//changing shipping address, cancel invoice etc
router.put('/:invoiceId', (req, res, next) => {
  Invoice.findById(req.params.invoiceId)
      .then(foundInvoice => foundInvoice.update(req.body))
      .then(updatedInvoice => res.send(updatedInvoice))
      .catch(next);
})


router.post('/remove', (req, res, next) => {
  Order.destroy(req.body.invoiceId)
    .then(() => res.sendStatus(204))
    .catch(next);
})


module.exports = router;