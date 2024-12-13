
const createHttpError = require("http-errors");
const uuid = require("uuid");
const app = require("../../../../index")
const errorHandlerDetailsres = require("../../../middlewares/errorsHandler/error.handler.knex");
;




const getAllCountTablesDashboards = async (req, res, next) => {
  try {
    const list = await app.db
      .select('table_name')
      .from('information_schema.tables')
      .where('table_schema', 'public')
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
    errorHandlerDetailsres.handleSqlError(error,res, next);
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
    //next(new createHttpError.BadRequest("Bad Request"));
    errorHandlerDetailsres.handleSqlError(error,res, next);

  }
};

const getOrderCountByStatus = async (req, res) => {
  try {
    const totalOrdersResult = await app.db('orders')
      .count('id as total_orders');
    const totalOrders = totalOrdersResult[0].total_orders;
    const result = await app.db('orders')
      .select('statusorders.name as status_name')
      .count('orders.id as order_count')
      .leftJoin('statusorders', 'orders.paymentstatusId', '=', 'statusorders.id')
      .groupBy('statusorders.name');
    const response = result.map(item => ({
      status_name: item.status_name,
      order_count: item.order_count,
      percentage: ((item.order_count / totalOrders) * 100).toFixed(2) + '%'
    }));
    res.json({
      message: "Order count by status",
      status: 200,
      data: response
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get order counts by status' });
  }
};


module.exports = {
  getAllCountTablesDashboards,
  getKpiDashboardById,
  getOrderCountByStatus
};
