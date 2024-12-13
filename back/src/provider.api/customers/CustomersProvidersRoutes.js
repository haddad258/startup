
const express = require("express");
const CustomersProvidersController = require("./customersprovidersController");
const authJwt = require("../../../middlewares/authJwt");
const restRoutercustomersproviders = express.Router();

restRoutercustomersproviders.post("/", [authJwt.verifyToken],  CustomersProvidersController.addCustomersProviders);
restRoutercustomersproviders.put("/:id", [authJwt.verifyToken],  CustomersProvidersController.updateCustomersProviders);
restRoutercustomersproviders.get("/", [authJwt.verifyToken],  CustomersProvidersController.getAllCustomersProviderss);
restRoutercustomersproviders.get("/:id", [authJwt.verifyToken],  CustomersProvidersController.getCustomersProvidersById);

module.exports = { restRoutercustomersproviders };
  