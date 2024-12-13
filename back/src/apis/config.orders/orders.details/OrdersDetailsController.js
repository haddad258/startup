
const createHttpError = require("http-errors");
const uuid = require("uuid");
const app = require("../../../../index")
const errorHandlerDetailsres = require("../../../middlewares/errorsHandler/error.handler.knex");
;

const addOrdersDetails = async (req, res, next) => {
  try {
    await app.db
      .table(`ordersdetails`)
      .insert(req.body)
      .then(() => {
        res.status(200).json({
          message: "New ordersdetails created",
          status: 200,
          data: req.body,
        });
      });
  } catch (error) {
    next(
      new createHttpError.BadRequest("Invalid values to create a ordersdetails.")
    );
  }
};

const updateOrdersDetails = async (req, res, next) => {
  try {
    await app.db
      .table("ordersdetails")
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

const getAllOrdersDetailss = async (req, res, next) => {
  try {
    await app.db
      .from("ordersdetails")
      .select("*")
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "ordersdetails not found with the given id",
            status: 200,
            data: rows,
          });
        }
        res.json({
          message: "ordersdetails fetched",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    errorHandlerDetailsres.handleSqlError(error,res, next);
  }
};

const getOrdersDetailsById = async (req, res, next) => {
  try {
    await app.db
      .from("ordersdetails")
      .select("*")
      .where("id", "=", req.params.id)
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "ordersdetails not found with the given id",
            status: 200,
            data: rows,
          });
        }

        res.json({
          message: "ordersdetails fetched with the given id",
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
  addOrdersDetails,
  updateOrdersDetails,
  getAllOrdersDetailss,
  getOrdersDetailsById,
};
  