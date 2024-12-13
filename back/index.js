
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const swaggerJSDoc = require("swagger-jsdoc");
fs = require('fs');
const { swaggerUi, swaggerSpec ,swaggerAuthMiddleware} = require('./swagger-docs');



const app = express();
app.use('/api-docs',swaggerAuthMiddleware, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/build"));
app.use(express.static(__dirname + "/views"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((err, req, res, next) => {
  console.error(err); // Log error for debugging

  if (res.headersSent) {
    return next(err);
  }

  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message || "Internal Server Error",
    details: err.details || null, // Attach error details if available
  });
});
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
const env = require("./env");
const db = require("./database");
app.set("view engine", "html");
app.set("views", path.join(__dirname, "views"));

app.db = db;

module.exports = app;

require("./contributor-1");


console.log("listening on port " + env.port);
app.listen(env.port || 80);
