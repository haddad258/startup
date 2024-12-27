
const createHttpError = require("http-errors");
const uuid = require("uuid");
const app = require("../../../index");
const config = require("../../config");
const errorHandlerDetailsres = require("../../middlewares/errorsHandler/error.handler.knex");
class ConfigApp {
  constructor(id, name, description, createdAt, updatedAt) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

const getAllConfigApp = async (req, res, next) => {
  try {
    const rows = await app.db
      .from(req.params.entity)
      .select("*");

    if (rows.length === 0) {
      return res.json({
        message: "configApp not found with the given id",
        status: 200,
        data: [],
      });
    }

    // Mapper chaque ligne à une instance de la classe ConfigApp
    const configApps = rows.map(row => 
      new ConfigApp(row.id, row.name, row.description, row.created_at, row.updated_at)
    );
    res.json({
      message: "configApp fetched",
      status: 200,
      data: configApps,
    });
  } catch (error) {
    errorHandlerDetailsres.handleSqlError(error,res, next);
  }
};

const getAllConfigApps = async (req, res, next) => {
  try {
    console.log("/api/mobile/config/apps")
    await app.db
      .from(req.params.entity)
      .select("*")
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "configApp not found with the given id",
            status: 200,
            data: rows,
          });
        }
        res.json({
          message: "configApp fetched",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    errorHandlerDetailsres.handleSqlError(error,res, next);
  }
};

const getConfigAppsById = async (req, res, next) => {
  try {
    console.log("heer")
    await app.db
      .from(req.params.entity)
      .select("*")
      .where("id", "=", req.params.id)
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "configApp not found with the given id",
            status: 200,
            data: rows,
          });
        }

        res.json({
          message: "configApp fetched with the given id",
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
  getAllConfigApps,
  getConfigAppsById,
};
  