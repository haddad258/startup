
const createHttpError = require("http-errors");
const uuid = require("uuid");
const app = require("../../../../index")
const errorHandlerDetailsres = require("../../../middlewares/errorsHandler/error.handler.knex");
;

const addSubscriptionsProviders = async (req, res, next) => {
  try {
    await app.db
      .table(`subscriptionsproviders`)
      .insert(req.body)
      .then(() => {
        res.status(200).json({
          message: "New subscriptionsproviders created",
          status: 200,
          data: req.body,
        });
      });
  } catch (error) {
    errorHandlerDetailsres.handleSqlError(error,res, next);
   
  }
};

const updateSubscriptionsProviders = async (req, res, next) => {
  try {
    await app.db
      .table("subscriptionsproviders")
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

const getAllSubscriptionsProviderss = async (req, res, next) => {
  try {
    await app.db
      .from("subscriptionsproviders")
      .select("*")
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "subscriptionsproviders not found with the given id",
            status: 200,
            data: rows,
          });
        }
        res.json({
          message: "subscriptionsproviders fetched",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    errorHandlerDetailsres.handleSqlError(error,res, next);
  }
};

const getSubscriptionsProvidersById = async (req, res, next) => {
  try {
    await app.db
      .from("subscriptionsproviders")
      .select("*")
      .where("id", "=", req.params.id)
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "subscriptionsproviders not found with the given id",
            status: 200,
            data: rows,
          });
        }

        res.json({
          message: "subscriptionsproviders fetched with the given id",
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
  addSubscriptionsProviders,
  updateSubscriptionsProviders,
  getAllSubscriptionsProviderss,
  getSubscriptionsProvidersById,
};
  