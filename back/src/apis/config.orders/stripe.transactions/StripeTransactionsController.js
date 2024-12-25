
const createHttpError = require("http-errors");
const uuid = require("uuid");
const app = require("../../../../index")
const errorHandlerDetailsres = require("../../../middlewares/errorsHandler/error.handler.knex");
const path = require('path');


const addStripeTransactions = async (req, res, next) => {
  try {
    console.log(req.body)
    await app.db
      .table(`paypal_transactions`)
      .insert(req.body)
      .then(() => {
        res.status(200).json({
          message: "New stripetransactions created",
          status: 200,
          data: req.body,
        });
      });
  } catch (error) {
    next(
      new createHttpError.BadRequest("Invalid values to create a stripetransactions.")
    );
  }
};

const updateStripeTransactions = async (req, res, next) => {
  try {
    await app.db
      .table("paypal_transactions")
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

const getAllStripeTransactionss = async (req, res, next) => {
  try {
    await app.db
      .from("paypal_transactions")
      .select("*")
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "stripetransactions not found with the given id",
            status: 200,
            data: rows,
          });
        }
        res.json({
          message: "stripetransactions fetched",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    errorHandlerDetailsres.handleSqlError(error,res, next);
  }
};

const getStripeTransactionsById = async (req, res, next) => {
  try {
    await app.db
      .from("paypal_transactions")
      .select("*")
      .where("id", "=", req.params.id)
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "stripetransactions not found with the given id",
            status: 200,
            data: rows,
          });
        }

        res.json({
          message: "stripetransactions fetched with the given id",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    //next(new createHttpError.BadRequest("Bad Request"));
    errorHandlerDetailsres.handleSqlError(error,res, next);

  }
};

const renderPayment = async (req, res, next) => {
  console.log(req.params)
  res.sendFile(path.join(__dirname, 'public.stripe', 'index.html'));
};
module.exports = {
  addStripeTransactions,
  updateStripeTransactions,
  getAllStripeTransactionss,
  getStripeTransactionsById,
  renderPayment
};
  