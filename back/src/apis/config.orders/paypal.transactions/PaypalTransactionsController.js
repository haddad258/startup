
const createHttpError = require("http-errors");
const uuid = require("uuid");
const express = require('express');
const app = require("../../../../index")
const errorHandlerDetailsres = require("../../../middlewares/errorsHandler/error.handler.knex");
;
const path = require('path');
const { client } = require('./paypalConfig');
const appExpress = express();
appExpress.use(express.static(path.join(__dirname, 'public')));
const paypal = require('@paypal/checkout-server-sdk');
const getRandomProfiles = async (numProfiles) => {
  try {
    const profiles = await app.db('profilesId')
      .orderByRaw('RANDOM()')
      .limit(numProfiles).first();
    return profiles;
  } catch (error) {
    console.error('Error fetching random profiles:', error);
  }
};
const addPaypalTransactions = async (req, res, next) => {


  try {
    const profilesT = await getRandomProfiles(1);
    console.log(req.body)
    const orderSelected = await app.db
      .from("orders")
      .select("*")
      .where("order_number", "=", req?.body?.orderId)
      .first()
    console.log("req.params", req.body, orderSelected)

    const request = new paypal.orders.OrdersCreateRequest();
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: orderSelected.price, // Example amount
          },
        },
      ],
    });
    const order = await client().execute(request);
    console.log("order", order)
    // Extract the approval URL from the response
    const approvalUrl = order.result.links.find(link => link.rel === 'approve').href;
    const linksUrl = order.result.links.find(link => link.rel === 'capture').href;
    console.log(approvalUrl)

    await app.db
      .table(`paypal_transactions`)
      .insert({
        ordersId: orderSelected.id,
        customerId: orderSelected.customerId,
        intent: order.result.id,
        state: order.result.status,
        payer_status: order.result.status,
        invoice_number: orderSelected.order_number,
        amount_total: orderSelected.price,
        payment_links: approvalUrl,
        sale_links: linksUrl

      })
      .then(async() => {
        console.log({
          orderId: order.result.id,
          approvalUrl: "approvalUrl",
        })
        await app.db
        .table('subscriptions')
        .insert({
          customerId: req.userId,
          profileId: profilesT.id,
          note:"default",
          // Optionally add any relevant profile fields if needed, e.g., profiles[0].id
        }).then(()=>{
          res.json({
            orderId: order.result.id,
            approvalUrl: approvalUrl,
          });
        })
       
      });
    // Send the order ID and approval URL to the frontend
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating order');
  }
}

const updatePaypalTransactions = async (req, res, next) => {
  try {
    await app.db
      .table("paypal_transactions")
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

const getAllPaypalTransactionss = async (req, res, next) => {
  try {
    await app.db
      .from("paypal_transactions")
      .select("*")
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "paypal_transactions not found with the given id",
            status: 200,
            data: rows,
          });
        }
        res.json({
          message: "paypal_transactions fetched",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    errorHandlerDetailsres.handleSqlError(error,res, next);
  }
};

const getPaypalTransactionsById = async (req, res, next) => {
  try {
    await app.db
      .from("paypal_transactions")
      .select("*")
      .where("id", "=", req.params.id)
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "paypal_transactions not found with the given id",
            status: 200,
            data: rows,
          });
        }

        res.json({
          message: "paypal_transactions fetched with the given id",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    //next(new createHttpError.BadRequest("Bad Request"));
    errorHandlerDetailsres.handleSqlError(error,res, next);

  }
};
const renderPayment = async (req, res, next) => {
  console.log(req.params)
  res.sendFile(path.join(__dirname, 'public.paypal', 'index.html'));
};
module.exports = {
  addPaypalTransactions,
  updatePaypalTransactions,
  getAllPaypalTransactionss,
  getPaypalTransactionsById,
  renderPayment
};
