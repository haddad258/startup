
const express = require("express");
const AdvertisementsProvidersController = require("./advertisementsprovidersController");
const authJwt = require("../../../middlewares/authJwt");
const restRouteradvertisementsproviders = express.Router();

restRouteradvertisementsproviders.post("/", [authJwt.verifyToken],  AdvertisementsProvidersController.addAdvertisementsProviders);
restRouteradvertisementsproviders.put("/:id", [authJwt.verifyToken],  AdvertisementsProvidersController.updateAdvertisementsProviders);
restRouteradvertisementsproviders.get("/", [authJwt.verifyToken],  AdvertisementsProvidersController.getAllAdvertisementsProviderss);
restRouteradvertisementsproviders.get("/:id", [authJwt.verifyToken],  AdvertisementsProvidersController.getAdvertisementsProvidersById);

module.exports = { restRouteradvertisementsproviders };
  