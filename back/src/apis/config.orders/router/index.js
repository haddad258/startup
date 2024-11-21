const app = require("../../../../index");
const { restRouterorders } = require("../orders/OrdersRoutes");
const { restRouterstatusorders } = require("../status.orders/StatusOrdersRoutes");
const { restRouterordersdetails } = require("../orders.details/OrdersDetailsRoutes");
const { restRouterpaypal_transactions } = require("../paypal.transactions/PaypalTransactionsRoutes");

const restRouter = app;
restRouter.use("/api/accounts/status/orders", restRouterstatusorders);
restRouter.use("/api/accounts/list/orders", restRouterorders);
restRouter.use("/api/accounts/details/orders", restRouterordersdetails);
restRouter.use("/api/accounts/paypals/transactions", restRouterpaypal_transactions);





///route imports and usage as neededpi/accounts/list/orders

module.exports = restRouter;