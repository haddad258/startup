
const createHttpError = require("http-errors");
const uuid = require("uuid");
const app = require("../../../../index")
const errorHandlerDetailsres = require("../../../middlewares/errorsHandler/error.handler.knex");
;

const addCustomersProviders = async (req, res, next) => {
  try {
    await app.db
      .table(`customersproviders`)
      .insert(req.body)
      .then(() => {
        res.status(200).json({
          message: "New customersproviders created",
          status: 200,
          data: req.body,
        });
      });
  } catch (error) {
    next(
      new createHttpError.BadRequest("Invalid values to create a customersproviders.")
    );
  }
};

const updateCustomersProviders = async (req, res, next) => {
  try {
    await app.db
      .table("customersproviders")
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

const getAllCustomersProviderss = async (req, res, next) => {
  try {
    await app.db
      .from("customersproviders")
      .select("*")
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "customersproviders not found with the given id",
            status: 200,
            data: rows,
          });
        }
        res.json({
          message: "customersproviders fetched",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    errorHandlerDetailsres.handleSqlError(error,res, next);
  }
};

const getCustomersProvidersById = async (req, res, next) => {
  try {
    await app.db
      .from("customersproviders")
      .select("*")
      .where("id", "=", req.params.id)
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "customersproviders not found with the given id",
            status: 200,
            data: rows,
          });
        }

        res.json({
          message: "customersproviders fetched with the given id",
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
  addCustomersProviders,
  updateCustomersProviders,
  getAllCustomersProviderss,
  getCustomersProvidersById,
};
  