
const createHttpError = require("http-errors");
const uuid = require("uuid");
const app = require("../../../../../index");

const addPaymentCard = async (req, res, next) => {
  try {
    await app.db
      .table(`paymentcards`)
      .insert(req.body)
      .then(() => {
        res.status(200).json({
          message: "New paymentcards created",
          status: 200,
          data: req.body,
        });
      });
  } catch (error) {
    next(
      new createHttpError.BadRequest("Invalid values to create a paymentcards.")
    );
  }
};

const updatePaymentCard = async (req, res, next) => {
  try {
    await app.db
      .table("paymentcards")
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

const getAllPaymentCards = async (req, res, next) => {
  try {
    await app.db
      .from("paymentcards")
      .select("*")
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "paymentcards not found with the given id",
            status: 200,
            data: rows,
          });
        }
        res.json({
          message: "paymentcards fetched",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    errorHandlerDetailsres.handleSqlError(error,res, next);
  }
};

const getPaymentCardById = async (req, res, next) => {
  try {
    await app.db
      .from("paymentcards")
      .select("*")
      .where("id", "=", req.params.id)
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "paymentcards not found with the given id",
            status: 200,
            data: rows,
          });
        }

        res.json({
          message: "paymentcards fetched with the given id",
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
  addPaymentCard,
  updatePaymentCard,
  getAllPaymentCards,
  getPaymentCardById,
};
  