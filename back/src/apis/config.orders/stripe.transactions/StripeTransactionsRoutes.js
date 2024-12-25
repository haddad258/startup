
const express = require("express");
const StripeTransactionsController = require("./StripeTransactionsController");
const authJwt = require("../../../middlewares/jwt.validations/authJwt");
const restRouterstripetransactions = express.Router();

restRouterstripetransactions.post("/", [authJwt.verifyToken],  StripeTransactionsController.addStripeTransactions);
restRouterstripetransactions.put("/:id", [authJwt.verifyToken],  StripeTransactionsController.updateStripeTransactions);
restRouterstripetransactions.get("/", [authJwt.verifyToken],  StripeTransactionsController.getAllStripeTransactionss);
restRouterstripetransactions.get("/:id", [authJwt.verifyToken],  StripeTransactionsController.getStripeTransactionsById);
restRouterstripetransactions.get("/render/:id", /* [authJwt.verifyToken],  */ StripeTransactionsController.renderPayment);

module.exports = { restRouterstripetransactions };
  