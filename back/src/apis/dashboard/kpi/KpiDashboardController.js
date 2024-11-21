
const createHttpError = require("http-errors");
const uuid = require("uuid");
const app = require("../../../../index");




const getAllCountTablesDashboards = async (req, res, next) => {
  try {
    const list = await app.db
      .select('table_name')
      .from('information_schema.tables')
      .where('table_schema', 'public') // Change schema if needed
    const tableNames = ["users",
      "paymentmode",
      "customers",
      "profilesId",
      "subscriptions",
      "paymentcards",
      "customerimages",
      "categories",
      "itemkits",
      "items",
      "articles",
      "brands",
      "articlesnotes",
      "providers",
      "publications",
      "advertisements",
      "discountarticles",
      "discounts",
      "placksarticles",
      "placks",
      "orders",
      "ordersdetails",
      "paypal_transactions"]

    const counts = {};
    // Loop through each table and get the count of rows
    for (const tableName of tableNames) {
      const countResult = await app.db(tableName).count("* as count");
      counts[tableName] = countResult[0].count;
    }
    res.json({
      message: "Row count for each table",
      status: 200,
      data: counts,
    });

  } catch (error) {
    console.error("Error fetching row counts: ", error);
    next(new createHttpError.InternalServerError("Internal Server Error"));
  }
};




const getKpiDashboardById = async (req, res, next) => {
  try {
    await app.db
      .from("kpidashboard")
      .select("*")
      .where("id", "=", req.params.id)
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "kpidashboard not found with the given id",
            status: 200,
            data: rows,
          });
        }

        res.json({
          message: "kpidashboard fetched with the given id",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    next(new createHttpError.BadRequest("Bad Request"));
  }
};

module.exports = {
  getAllCountTablesDashboards,
  getKpiDashboardById,
};
