const express = require("express");
const ArticlesController = require("./ArticlesController");
const restRouterarticlesDiscounts = express.Router();
restRouterarticlesDiscounts.get("/",  ArticlesController.getAllArticlesDisounts);
restRouterarticlesDiscounts.get("/disounts",  ArticlesController.getAllArticlesDisounts);
restRouterarticlesDiscounts.get("/recommend",  ArticlesController.getAllArticlesRecommanded);

module.exports = { restRouterarticlesDiscounts };
  