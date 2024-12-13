
const express = require("express");
const CalendersProvidersController = require("./calendersprovidersController");
const authJwt = require("../../../middlewares/authJwt");
const restRoutercalendarsproviders = express.Router();

restRoutercalendarsproviders.post("/", [authJwt.verifyToken],  CalendersProvidersController.addCalendersProviders);
restRoutercalendarsproviders.put("/:id", [authJwt.verifyToken],  CalendersProvidersController.updateCalendersProviders);
restRoutercalendarsproviders.get("/", [authJwt.verifyToken],  CalendersProvidersController.getAllCalendersProviderss);
restRoutercalendarsproviders.get("/:id", [authJwt.verifyToken],  CalendersProvidersController.getCalendersProvidersById);

module.exports = { restRoutercalendarsproviders };
  