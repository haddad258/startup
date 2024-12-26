const createHttpError = require("http-errors");
const uuid = require("uuid");
const app = require("../../../index");
const config = require("../../config");



const getAllArticless = async (req, res, next) => {
  try {
    await app.db
      .from("articles")
      .select("*")
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "articles not found with the given id",
            status: 200,
            data: rows,
          });
        }
        res.json({
          message: "articles fetched",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    errorHandlerDetailsres.handleSqlError(error,res, next);
  }
};

const getArticlesById = async (req, res, next) => {
  try {
    await app.db
      .from("articles")
      .select("*")
      .where("id", "=", req.params.id)
      .first()
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "articles not found with the given id",
            status: 200,
            data: rows,
          });
        }
        res.json({
          message: "articles fetched with the given id",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    //next(new createHttpError.BadRequest("Bad Request"));
    errorHandlerDetailsres.handleSqlError(error,res, next);

  }
};
const getAllArticlesDisounts = async (req, res, next) => {
  try {
    console.log("getAllArticlesDisounts")
    await app.db
      .from("discountarticles")
      .join("articles", "discountarticles.articleId", "articles.id") // Join with the articles table
      .select("articles.*") // Select only the articles fields
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "No articles found for the given discount",
            status: 200,
            data: [],
          });
        }
        res.json({
          message: "Articles fetched successfully",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    errorHandlerDetailsres.handleSqlError(error,res, next);
  }
};

const getAllArticlesRecommanded = async (req, res, next) => {
  try {
    console.log("getAllArticlesRecommanded")
    await app.db
      .from("articles")
      .select("*")
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "articles not found with the given id",
            status: 200,
            data: rows,
          });
        }
        res.json({
          message: "articles fetched",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    errorHandlerDetailsres.handleSqlError(error,res, next);
  }
};

module.exports = {
  getAllArticless,
  getArticlesById,
  getAllArticlesDisounts,
  getAllArticlesRecommanded
};
