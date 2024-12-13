
const express = require("express");
const SubscriptionsCustomerController = require("./SubscriptionsCustomerController");
const authJwt = require("../../../middlewares/jwt.validations/authCustomer");
const restRoutersubscriptionsProfiles = express.Router();

restRoutersubscriptionsProfiles.get("/", /* [authJwt.verifyToken], */  SubscriptionsCustomerController.getProfilesBySubscriptionId);

module.exports = { restRoutersubscriptionsProfiles };
  