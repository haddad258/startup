
const createHttpError = require("http-errors");
const uuid = require("uuid");
const app = require("../../../../index")
const errorHandlerDetailsres = require("../../../middlewares/errorsHandler/error.handler.knex");
;

const addDashboardProviders = async (req, res, next) => {
  try {
    await app.db
      .table(`dashboardproviders`)
      .insert(req.body)
      .then(() => {
        res.status(200).json({
          message: "New dashboardproviders created",
          status: 200,
          data: req.body,
        });
      });
  } catch (error) {
    next(
      new createHttpError.BadRequest("Invalid values to create a dashboardproviders.")
    );
  }
};

const updateDashboardProviders = async (req, res, next) => {
  try {
    await app.db
      .table("dashboardproviders")
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

const getAllDashboardProviderss = async (req, res, next) => {
  try {
    await app.db
      .from("dashboardproviders")
      .select("*")
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "dashboardproviders not found with the given id",
            status: 200,
            data: rows,
          });
        }
        res.json({
          message: "dashboardproviders fetched",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    errorHandlerDetailsres.handleSqlError(error,res, next);
  }
};

const getDashboardProvidersById = async (req, res, next) => {
  try {
    await app.db
      .from("dashboardproviders")
      .select("*")
      .where("id", "=", req.params.id)
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "dashboardproviders not found with the given id",
            status: 200,
            data: rows,
          });
        }

        res.json({
          message: "dashboardproviders fetched with the given id",
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
  addDashboardProviders,
  updateDashboardProviders,
  getAllDashboardProviderss,
  getDashboardProvidersById,
};
  