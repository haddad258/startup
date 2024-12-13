
const createHttpError = require("http-errors");
const uuid = require("uuid");
const app = require("../../../../index")
const errorHandlerDetailsres = require("../../../middlewares/errorsHandler/error.handler.knex");
;

const addArticlesProviders = async (req, res, next) => {
  try {
    await app.db
      .table(`articlesproviders`)
      .insert(req.body)
      .then(() => {
        res.status(200).json({
          message: "New articlesproviders created",
          status: 200,
          data: req.body,
        });
      });
  } catch (error) {
    next(
      new createHttpError.BadRequest("Invalid values to create a articlesproviders.")
    );
  }
};

const updateArticlesProviders = async (req, res, next) => {
  try {
    await app.db
      .table("articlesproviders")
      .update({ ...req.body, updated_at: new Date() })
      .where("id", "=", req.params.id)
      .then(() => {
        res.status(200).json({
          message: "Successfully updated",
          status: 200,
          data: req.body,
        });
      });
  } catch (error) {
    errorHandlerDetailsres.handleSqlError(error,res, next);
  }
};

const getAllArticlesProviderss = async (req, res, next) => {
  try {
    await app.db
      .from("articlesproviders")
      .select("*")
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "articlesproviders not found with the given id",
            status: 200,
            data: rows,
          });
        }
        res.json({
          message: "articlesproviders fetched",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    errorHandlerDetailsres.handleSqlError(error,res, next);
  }
};

const getArticlesProvidersById = async (req, res, next) => {
  try {
    await app.db
      .from("articlesproviders")
      .select("*")
      .where("id", "=", req.params.id)
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "articlesproviders not found with the given id",
            status: 200,
            data: rows,
          });
        }

        res.json({
          message: "articlesproviders fetched with the given id",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    //next(new createHttpError.BadRequest("Bad Request"));
    errorHandlerDetailsres.handleSqlError(error,res, next);

  }
};

module.exports = {
  addArticlesProviders,
  updateArticlesProviders,
  getAllArticlesProviderss,
  getArticlesProvidersById,
};
  