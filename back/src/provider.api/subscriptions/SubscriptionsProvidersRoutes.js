
const express = require("express");
const SubscriptionsProvidersController = require("./subscriptionsprovidersController");
const authJwt = require("../../../middlewares/authJwt");
const restRoutersubscriptionsproviders = express.Router();

restRoutersubscriptionsproviders.post("/", [authJwt.verifyToken],  SubscriptionsProvidersController.addSubscriptionsProviders);
restRoutersubscriptionsproviders.put("/:id", [authJwt.verifyToken],  SubscriptionsProvidersController.updateSubscriptionsProviders);
restRoutersubscriptionsproviders.get("/", [authJwt.verifyToken],  SubscriptionsProvidersController.getAllSubscriptionsProviderss);
restRoutersubscriptionsproviders.get("/:id", [authJwt.verifyToken],  SubscriptionsProvidersController.getSubscriptionsProvidersById);

module.exports = { restRoutersubscriptionsproviders };
  