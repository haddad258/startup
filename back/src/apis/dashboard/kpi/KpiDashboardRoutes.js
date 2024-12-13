
const express = require("express");
const KpiDashboardController = require("./KpiDashboardController");
const authJwt = require("../../../middlewares/jwt.validations/authJwt");
const restRouterkpidashboard = express.Router();

restRouterkpidashboard.get("/count/tables/index",/*  [authJwt.verifyToken],  */ KpiDashboardController.getAllCountTablesDashboards);
restRouterkpidashboard.get("/count/status/orders",/*  [authJwt.verifyToken],  */ KpiDashboardController.getOrderCountByStatus);
restRouterkpidashboard.get("/:id", [authJwt.verifyToken],  KpiDashboardController.getKpiDashboardById);

module.exports = { restRouterkpidashboard };
  