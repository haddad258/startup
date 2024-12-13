
const createHttpError = require("http-errors");
const uuid = require("uuid");
const app = require("../../../../index")
const errorHandlerDetailsres = require("../../../middlewares/errorsHandler/error.handler.knex");
;

const addCalendersProviders = async (req, res, next) => {
  try {
    await app.db
      .table(`calendarsproviders`)
      .insert(req.body)
      .then(() => {
        res.status(200).json({
          message: "New calendarsproviders created",
          status: 200,
          data: req.body,
        });
      });
  } catch (error) {
    next(
      new createHttpError.BadRequest("Invalid values to create a calendarsproviders.")
    );
  }
};

const updateCalendersProviders = async (req, res, next) => {
  try {
    await app.db
      .table("calendarsproviders")
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

const getAllCalendersProviderss = async (req, res, next) => {
  try {
    await app.db
      .from("calendarsproviders")
      .select("*")
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "calendarsproviders not found with the given id",
            status: 200,
            data: rows,
          });
        }
        res.json({
          message: "calendarsproviders fetched",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    errorHandlerDetailsres.handleSqlError(error,res, next);
  }
};

const getCalendersProvidersById = async (req, res, next) => {
  try {
    await app.db
      .from("calendarsproviders")
      .select("*")
      .where("id", "=", req.params.id)
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "calendarsproviders not found with the given id",
            status: 200,
            data: rows,
          });
        }

        res.json({
          message: "calendarsproviders fetched with the given id",
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
  addCalendersProviders,
  updateCalendersProviders,
  getAllCalendersProviderss,
  getCalendersProvidersById,
};
  