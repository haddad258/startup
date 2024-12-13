
const express = require("express");
const ProviderArticlesController = require("./ProviderArticlesController");
const authJwt = require("../../../../middlewares/jwt.validations/authJwt");
const restRouterproviderarticles = express.Router();

restRouterproviderarticles.post("/", [authJwt.verifyToken],  ProviderArticlesController.addProviderArticles);
restRouterproviderarticles.put("/:id", [authJwt.verifyToken],  ProviderArticlesController.updateProviderArticles);
restRouterproviderarticles.get("/", [authJwt.verifyToken],  ProviderArticlesController.getAllProviderArticless);
restRouterproviderarticles.get("/:id", [authJwt.verifyToken],  ProviderArticlesController.getProviderArticlesById);

module.exports = { restRouterproviderarticles };
  