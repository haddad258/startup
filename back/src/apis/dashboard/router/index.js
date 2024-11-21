const app = require("../../../../index");
const express = require("express");
const { restRouterkpidashboard } = require("../kpi/KpiDashboardRoutes");



const restDashboardRouter = app;
restDashboardRouter.use("/kpi/dashboard", restRouterkpidashboard);

// Import routes  use unique route names


module.exports = restDashboardRouter;