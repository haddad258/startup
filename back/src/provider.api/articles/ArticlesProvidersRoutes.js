
const express = require("express");
const ArticlesProvidersController = require("./articlesprovidersController");
const authJwt = require("../../../middlewares/authJwt");
const restRouterarticlesproviders = express.Router();

restRouterarticlesproviders.post("/", [authJwt.verifyToken],  ArticlesProvidersController.addArticlesProviders);
restRouterarticlesproviders.put("/:id", [authJwt.verifyToken],  ArticlesProvidersController.updateArticlesProviders);
restRouterarticlesproviders.get("/", [authJwt.verifyToken],  ArticlesProvidersController.getAllArticlesProviderss);
restRouterarticlesproviders.get("/:id", [authJwt.verifyToken],  ArticlesProvidersController.getArticlesProvidersById);

module.exports = { restRouterarticlesproviders };
  