
const createHttpError = require("http-errors");
const uuid = require("uuid");
const app = require("../../../../index")
const errorHandlerDetailsres = require("../../../middlewares/errorsHandler/error.handler.knex");
;

const addOrdersProviders = async (req, res, next) => {
  try {
    await app.db
      .table(`ordersproviders`)
      .insert(req.body)
      .then(() => {
        res.status(200).json({
          message: "New ordersproviders created",
          status: 200,
          data: req.body,
        });
      });
  } catch (error) {
    errorHandlerDetailsres.handleSqlError(error,res, next);
  }
};

const updateOrdersProviders = async (req, res, next) => {
  try {
    await app.db
      .table("ordersproviders")
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

const getAllOrdersProviderss = async (req, res, next) => {
  try {
    await app.db
      .from("ordersproviders")
      .select("*")
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "ordersproviders not found with the given id",
            status: 200,
            data: rows,
          });
        }
        res.json({
          message: "ordersproviders fetched",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    errorHandlerDetailsres.handleSqlError(error,res, next);
  }
};

const getOrdersProvidersById = async (req, res, next) => {
  try {
    await app.db
      .from("ordersproviders")
      .select("*")
      .where("id", "=", req.params.id)
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "ordersproviders not found with the given id",
            status: 200,
            data: rows,
          });
        }

        res.json({
          message: "ordersproviders fetched with the given id",
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
  addOrdersProviders,
  updateOrdersProviders,
  getAllOrdersProviderss,
  getOrdersProvidersById,
};
  