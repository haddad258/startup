
const express = require("express");
const KpiDashboardController = require("./KpiDashboardController");
const authJwt = require("../../../middlewares/authJwt");
const restRouterkpidashboard = express.Router();

restRouterkpidashboard.get("/count/tables/index",/*  [authJwt.verifyToken],  */ KpiDashboardController.getAllCountTablesDashboards);
restRouterkpidashboard.get("/:id", [authJwt.verifyToken],  KpiDashboardController.getKpiDashboardById);

module.exports = { restRouterkpidashboard };
  