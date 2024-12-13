
const createHttpError = require("http-errors");
const uuid = require("uuid");
const app = require("../../../../index")
const errorHandlerDetailsres = require("../../../middlewares/errorsHandler/error.handler.knex");
;


const getEntityListFiltred = async (req, res, next) => {
  try {
    console.log("getEntityListFiltred",req.body)
    await app.db
      .table("articles")
      .select("*")
      .where(req.body.filerAttr,req.body.filerId)
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "locations not found with the given id",
            status: 200,
            data: rows,
          });
        }
        res.json({
          message: "locations fetched",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    
    errorHandlerDetailsres.handleSqlError(error,res, next);
  }
};


module.exports = {
  getEntityListFiltred

};
  