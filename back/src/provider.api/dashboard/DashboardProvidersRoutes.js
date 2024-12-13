
const express = require("express");
const DashboardProvidersController = require("./dashboardprovidersController");
const authJwt = require("../../../middlewares/authJwt");
const restRouterdashboardproviders = express.Router();

restRouterdashboardproviders.post("/", [authJwt.verifyToken],  DashboardProvidersController.addDashboardProviders);
restRouterdashboardproviders.put("/:id", [authJwt.verifyToken],  DashboardProvidersController.updateDashboardProviders);
restRouterdashboardproviders.get("/", [authJwt.verifyToken],  DashboardProvidersController.getAllDashboardProviderss);
restRouterdashboardproviders.get("/:id", [authJwt.verifyToken],  DashboardProvidersController.getDashboardProvidersById);

module.exports = { restRouterdashboardproviders };
  