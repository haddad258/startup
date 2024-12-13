
const express = require("express");
const OrdersProvidersController = require("./ordersprovidersController");
const authJwt = require("../../../middlewares/authJwt");
const restRouterordersproviders = express.Router();

restRouterordersproviders.post("/", [authJwt.verifyToken],  OrdersProvidersController.addOrdersProviders);
restRouterordersproviders.put("/:id", [authJwt.verifyToken],  OrdersProvidersController.updateOrdersProviders);
restRouterordersproviders.get("/", [authJwt.verifyToken],  OrdersProvidersController.getAllOrdersProviderss);
restRouterordersproviders.get("/:id", [authJwt.verifyToken],  OrdersProvidersController.getOrdersProvidersById);

module.exports = { restRouterordersproviders };
  