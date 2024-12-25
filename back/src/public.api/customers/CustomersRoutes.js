
const express = require("express");
const CustomersController = require("./CustomersController");
const authJwt = require("../../middlewares/jwt.validations/authCustomer");

const restRoutercustomers = express.Router();

restRoutercustomers.post("/", CustomersController.addCustomers);
restRoutercustomers.post("/login", CustomersController.LoginAPICustomers);
restRoutercustomers.put("/me", [authJwt.verifyToken],  CustomersController.updateCustomers);
restRoutercustomers.get("/me", [authJwt.verifyToken],  CustomersController.getCustomersById);

module.exports = { restRoutercustomers };
  