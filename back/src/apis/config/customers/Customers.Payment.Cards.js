
const express = require("express");
const CustomersController = require("./CustomersController");
const authJwt = require("../../../middlewares/authJwt");
const restRouterPaymentCardcustomers = express.Router();

restRouterPaymentCardcustomers.get("/:id",[authJwt.verifyToken],  CustomersController.getPaymentCardCustomersById);

module.exports = { restRouterPaymentCardcustomers };
  