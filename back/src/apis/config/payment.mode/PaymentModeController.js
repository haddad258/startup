
const createHttpError = require("http-errors");
const uuid = require("uuid");
const app = require("../../../../index")
const errorHandlerDetailsres = require("../../../middlewares/errorsHandler/error.handler.knex");
;

const addPaymentMode = async (req, res, next) => {
  try {
    await app.db
      .table(`paymentmode`)
      .insert(req.body)
      .then(() => {
        res.status(200).json({
          message: "New paymentmode created",
          status: 200,
          data: req.body,
        });
      });
  } catch (error) {
    next(
      new createHttpError.BadRequest("Invalid values to create a paymentmode.")
    );
  }
};

const updatePaymentMode = async (req, res, next) => {
  try {
    await app.db
      .table("paymentmode")
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

const getAllPaymentModes = async (req, res, next) => {
  try {
    await app.db
      .from("paymentmode")
      .select("*")
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "paymentmode not found with the given id",
            status: 200,
            data: rows,
          });
        }
        res.json({
          message: "paymentmode fetched",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    
    errorHandlerDetailsres.handleSqlError(error,res, next);
  }
};

const getPaymentModeById = async (req, res, next) => {
  try {
    await app.db
      .from("paymentmode")
      .select("*")
      .where("id", "=", req.params.id)
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "paymentmode not found with the given id",
            status: 200,
            data: rows,
          });
        }

        res.json({
          message: "paymentmode fetched with the given id",
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
  addPaymentMode,
  updatePaymentMode,
  getAllPaymentModes,
  getPaymentModeById,
};
  