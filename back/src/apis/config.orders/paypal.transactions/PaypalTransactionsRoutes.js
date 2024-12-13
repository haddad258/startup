
const express = require("express");
const PaypalTransactionsController = require("./PaypalTransactionsController");
const authJwt = require("../../../middlewares/jwt.validations/authJwt");
const restRouterpaypal_transactions = express.Router();

restRouterpaypal_transactions.post("/", /* [authJwt.verifyToken],  */ PaypalTransactionsController.addPaypalTransactions);
restRouterpaypal_transactions.put("/:id", /* [authJwt.verifyToken], */  PaypalTransactionsController.updatePaypalTransactions);
restRouterpaypal_transactions.get("/", /* [authJwt.verifyToken],  */ PaypalTransactionsController.getAllPaypalTransactionss);
restRouterpaypal_transactions.get("/:id", /* [authJwt.verifyToken],  */ PaypalTransactionsController.getPaypalTransactionsById);
restRouterpaypal_transactions.get("/render/:id", /* [authJwt.verifyToken],  */ PaypalTransactionsController.renderPayment);


module.exports = { restRouterpaypal_transactions };
  