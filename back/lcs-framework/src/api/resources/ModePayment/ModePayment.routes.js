const express = require('express');
const ModePaymentController = require('./ModePayment.controller');
const { sanitize } = require('../../../middleware/sanitize');

const ModePaymentRouter = express.Router();

ModePaymentRouter.route('/')
  .post(sanitize(), ModePaymentController.createModePayment)
  .get(sanitize(), ModePaymentController.getModePayment);

ModePaymentRouter.route('/info/:id')
  .get(sanitize(), ModePaymentController.getModePaymentById);

ModePaymentRouter.route('/update/:id')
  .put(sanitize(), ModePaymentController.updateModePayment);

// Uncomment the following route if you need the delete operation
// ModePaymentRouter.route('/delete/:id')
//   .delete(sanitize(), ModePaymentController.deleteModePayment);

module.exports = { ModePaymentRouter };
