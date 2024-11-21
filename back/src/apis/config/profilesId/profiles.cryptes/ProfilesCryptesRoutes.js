
const express = require("express");
const ProfilesCryptesController = require("./ProfilesCryptesController");
const authJwt = require("../../../../middlewares/authJwt");
const restRouterprofilescryptes = express.Router();

restRouterprofilescryptes.post("/", [authJwt.verifyToken],  ProfilesCryptesController.addProfilesCryptes);
restRouterprofilescryptes.put("/:id", [authJwt.verifyToken],  ProfilesCryptesController.updateProfilesCryptes);
restRouterprofilescryptes.get("/", [authJwt.verifyToken],  ProfilesCryptesController.getAllProfilesCryptess);
restRouterprofilescryptes.get("/:id", [authJwt.verifyToken],  ProfilesCryptesController.getProfilesCryptesById);

module.exports = { restRouterprofilescryptes };
  