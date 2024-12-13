
const createHttpError = require("http-errors");
const uuid = require("uuid");
const app = require("../../../../index")
const errorHandlerDetailsres = require("../../../middlewares/errorsHandler/error.handler.knex");
;

const addStatusOrders = async (req, res, next) => {
  try {
    await app.db
      .table(`statusorders`)
      .insert(req.body)
      .then(() => {
        res.status(200).json({
          message: "New statusorders created",
          status: 200,
          data: req.body,
        });
      });
  } catch (error) {
    next(
      new createHttpError.BadRequest("Invalid values to create a statusorders.")
    );
  }
};

const updateStatusOrders = async (req, res, next) => {
  try {
    await app.db
      .table("statusorders")
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

const getAllStatusOrderss = async (req, res, next) => {
  try {
    await app.db
      .from("statusorders")
      .select("*")
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "statusorders not found with the given id",
            status: 200,
            data: rows,
          });
        }
        res.json({
          message: "statusorders fetched",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    errorHandlerDetailsres.handleSqlError(error,res, next);
  }
};

const getStatusOrdersById = async (req, res, next) => {
  try {
    await app.db
      .from("statusorders")
      .select("*")
      .where("id", "=", req.params.id)
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "statusorders not found with the given id",
            status: 200,
            data: rows,
          });
        }

        res.json({
          message: "statusorders fetched with the given id",
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
  addStatusOrders,
  updateStatusOrders,
  getAllStatusOrderss,
  getStatusOrdersById,
};
  