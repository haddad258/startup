
const createHttpError = require("http-errors");
const uuid = require("uuid");
const app = require("../../../../index")
const errorHandlerDetailsres = require("../../../middlewares/errorsHandler/error.handler.knex");
;

const addAdvertisementsProviders = async (req, res, next) => {
  try {
    await app.db
      .table(`advertisementsproviders`)
      .insert(req.body)
      .then(() => {
        res.status(200).json({
          message: "New advertisementsproviders created",
          status: 200,
          data: req.body,
        });
      });
  } catch (error) {
    next(
      new createHttpError.BadRequest("Invalid values to create a advertisementsproviders.")
    );
  }
};

const updateAdvertisementsProviders = async (req, res, next) => {
  try {
    await app.db
      .table("advertisementsproviders")
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

const getAllAdvertisementsProviderss = async (req, res, next) => {
  try {
    await app.db
      .from("advertisementsproviders")
      .select("*")
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "advertisementsproviders not found with the given id",
            status: 200,
            data: rows,
          });
        }
        res.json({
          message: "advertisementsproviders fetched",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    errorHandlerDetailsres.handleSqlError(error,res, next);
  }
};

const getAdvertisementsProvidersById = async (req, res, next) => {
  try {
    await app.db
      .from("advertisementsproviders")
      .select("*")
      .where("id", "=", req.params.id)
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "advertisementsproviders not found with the given id",
            status: 200,
            data: rows,
          });
        }

        res.json({
          message: "advertisementsproviders fetched with the given id",
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
  addAdvertisementsProviders,
  updateAdvertisementsProviders,
  getAllAdvertisementsProviderss,
  getAdvertisementsProvidersById,
};
  