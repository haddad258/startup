
const express = require("express");
const commonRowsController = require("./commonRowsController");

const restRoutercommonRowsFilter = express.Router();

restRoutercommonRowsFilter.post("/",  commonRowsController.getEntityListFiltred);
restRoutercommonRowsFilter.get("/",  commonRowsController.getEntityListFiltred);
module.exports = { restRoutercommonRowsFilter };
  