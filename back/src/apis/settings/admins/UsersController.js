
const createHttpError = require("http-errors");
const uuid = require("uuid");
const app = require("../../../../index")
const errorHandlerDetailsres = require("../../../middlewares/errorsHandler/error.handler.knex");
;
const bcrypt = require('bcrypt-nodejs');

const addUsers = async (req, res, next) => {
  try {
    console.log(req.body)
    await app.db
      .table(`users`)
      .insert(req.body)
      .then(() => {
        res.status(200).json({
          message: "New users created",
          status: 200,
          data: req.body,
        });
      });
  } catch (error) {
    errorHandlerDetailsres.handleSqlError(error,res, next);
  }
};

const updateUsers = async (req, res, next) => {
  try {
    await app.db
      .table("users")
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
const updateUserPassword = async (req, res, next) => {
  try {

    const { password } = req.body
    await app.db
      .table("users")
      .update({ password: bcrypt.hashSync(password), updated_at: new Date() })
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
const getAllUserss = async (req, res, next) => {
  try {
    await app.db
      .from("users")
      .select("*")
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "users not found with the given id",
            status: 200,
            data: rows,
          });
        }
        res.json({
          message: "users fetched",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    errorHandlerDetailsres.handleSqlError(error,res, next);
  }
};

const getUsersById = async (req, res, next) => {
  try {
    await app.db
      .from("users")
      .select("*")
      .where("id", "=", req.params.id)
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "users not found with the given id",
            status: 200,
            data: rows,
          });
        }

        res.json({
          message: "users fetched with the given id",
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
  addUsers,
  updateUsers,
  getAllUserss,
  getUsersById,
  updateUserPassword
};
