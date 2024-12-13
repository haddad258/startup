
const express = require("express");
const OrdersDetailsController = require("./OrdersDetailsController");
const authJwt = require("../../../middlewares/jwt.validations/authJwt");
const restRouterordersdetails = express.Router();

restRouterordersdetails.post("/", [authJwt.verifyToken],  OrdersDetailsController.addOrdersDetails);
restRouterordersdetails.put("/:id", [authJwt.verifyToken],  OrdersDetailsController.updateOrdersDetails);
restRouterordersdetails.get("/", [authJwt.verifyToken],  OrdersDetailsController.getAllOrdersDetailss);
restRouterordersdetails.get("/:id", [authJwt.verifyToken],  OrdersDetailsController.getOrdersDetailsById);
/**
 * @swagger
 * /orderdetails:
 *   post:
 *     summary: Ajouter des détails de commande
 *     tags:
 *       - OrderDetails
 *     security:
 *       - jwt: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: string
 *                 example: "f9b1a5a6-89e2-4b11-82b4-f35f9b4c11db"
 *               itemId:
 *                 type: string
 *                 example: "a1f9b1b2-7e58-4a33-9fd8-4f1c7c27b978"
 *               quantity:
 *                 type: integer
 *                 example: 2
 *               price:
 *                 type: number
 *                 format: float
 *                 example: 29.99
 *     responses:
 *       200:
 *         description: Détails de commande ajoutés avec succès
 *       400:
 *         description: Données invalides
 */

/**
 * @swagger
 * /orderdetails/{id}:
 *   get:
 *     summary: Obtenir les détails d'une commande par ID
 *     tags:
 *       - OrderDetails
 *     security:
 *       - jwt: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID des détails de la commande
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Détails de la commande récupérés avec succès
 *       404:
 *         description: Détails de la commande non trouvés
 */

/**
 * @swagger
 * /paypal_transactions:
 *   post:
 *     summary: Ajouter une transaction PayPal
 *     tags:
 *       - PayPalTransactions
 *     security:
 *       - jwt: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: string
 *                 example: "f9b1a5a6-89e2-4b11-82b4-f35f9b4c11db"
 *               transactionId:
 *                 type: string
 *                 example: "TRANSACTION123"
 *               amount:
 *                 type: number
 *                 format: float
 *                 example: 59.98
 *               paymentStatus:
 *                 type: string
 *                 example: "Completed"
 *               paymentMethod:
 *                 type: string
 *                 example: "PayPal"
 *     responses:
 *       200:
 *         description: Transaction PayPal ajoutée avec succès
 *       400:
 *         description: Données invalides
 */

/**
 * @swagger
 * /paypal_transactions/{id}:
 *   get:
 *     summary: Obtenir une transaction PayPal par ID
 *     tags:
 *       - PayPalTransactions
 *     security:
 *       - jwt: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la transaction PayPal
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Transaction PayPal récupérée avec succès
 *       404:
 *         description: Transaction PayPal non trouvée
 */
module.exports = { restRouterordersdetails };
  