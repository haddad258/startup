
const createHttpError = require("http-errors");
const uuid = require("uuid");
const app = require("../../../../../index");

const addProfilesCryptes = async (req, res, next) => {
  try {
    console.log(req.body)
    await app.db
      .table(`profilescryptes`)
      .insert(req.body)
      .then(() => {
        res.status(200).json({
          message: "New profilescryptes created",
          status: 200,
          data: req.body,
        });
      });
  } catch (error) {
    console.log(error)
    next(
      new createHttpError.BadRequest("Invalid values to create a profilescryptes.")
    );
  }
};

const updateProfilesCryptes = async (req, res, next) => {
  try {
    await app.db
      .table("profilescryptes")
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
    next(new createHttpError.InternalServerError(error));
  }
};

const getAllProfilesCryptess = async (req, res, next) => {
  try {
    await app.db
      .from("profilescryptes")
      .select("*")
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "profilescryptes not found with the given id",
            status: 200,
            data: rows,
          });
        }
        res.json({
          message: "profilescryptes fetched",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    next(new createHttpError.InternalServerError("Internal Server Error"));
  }
};

const getProfilesCryptesById = async (req, res, next) => {
  try {
    console.log("getProfilesCryptesById")
    await app.db
      .from("profilescryptes")
      .select("*")
      .where("profilesId", "=", req.params.id)
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "profilescryptes not found with the given id",
            status: 200,
            data: rows,
          });
        }

        res.json({
          message: "profilescryptes fetched with the given id",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    next(new createHttpError.BadRequest("Bad Request"));
  }
};

module.exports = {
  addProfilesCryptes,
  updateProfilesCryptes,
  getAllProfilesCryptess,
  getProfilesCryptesById,
};
  