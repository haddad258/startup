
const express = require("express");
const OrdersController = require("./OrdersController");
const authJwt = require("../../../middlewares/jwt.validations/authJwt");
const restRouterorders = express.Router();

restRouterorders.post("/", [authJwt.verifyToken],  OrdersController.addOrders);
restRouterorders.put("/:id", [authJwt.verifyToken],  OrdersController.updateOrders);
restRouterorders.get("/", [authJwt.verifyToken],  OrdersController.getAllOrderss);
restRouterorders.get("/:id", [authJwt.verifyToken],  OrdersController.getOrdersById);
restRouterorders.get("/by/order/:id", [authJwt.verifyToken],  OrdersController.getOrdersByIdTransactions);

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Créer une nouvelle commande
 *     tags:
 *       - Orders
 *     security:
 *       - jwt: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 example: "f9b1a5a6-89e2-4b11-82b4-f35f9b4c11db"
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     itemId:
 *                       type: string
 *                       example: "a1f9b1b2-7e58-4a33-9fd8-4f1c7c27b978"
 *                     quantity:
 *                       type: integer
 *                       example: 2
 *               totalAmount:
 *                 type: number
 *                 format: float
 *                 example: 59.98
 *               status:
 *                 type: string
 *                 example: "pending"
 *               shippingAddress:
 *                 type: string
 *                 example: "123 Street, City, Country"
 *     responses:
 *       200:
 *         description: Commande créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Order created successfully"
 *                 status:
 *                   type: integer
 *                   example: 200
 *                 data:
 *                   type: object
 *                   properties:
 *                     userId:
 *                       type: string
 *                     items:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           itemId:
 *                             type: string
 *                           quantity:
 *                             type: integer
 *                     totalAmount:
 *                       type: number
 *                       format: float
 *                     status:
 *                       type: string
 *                     shippingAddress:
 *                       type: string
 *       400:
 *         description: Données invalides
 */

/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     summary: Mettre à jour une commande existante par ID
 *     tags:
 *       - Orders
 *     security:
 *       - jwt: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la commande à mettre à jour
 *         required: true
 *         type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 example: "shipped"
 *               shippingAddress:
 *                 type: string
 *                 example: "456 Avenue, City, Country"
 *     responses:
 *       200:
 *         description: Commande mise à jour avec succès
 *       404:
 *         description: Commande non trouvée
 *       400:
 *         description: Données invalides
 */

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Récupérer toutes les commandes
 *     tags:
 *       - Orders
 *     security:
 *       - jwt: []
 *     responses:
 *       200:
 *         description: Liste des commandes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "a1f9b1b2-7e58-4a33-9fd8-4f1c7c27b978"
 *                   userId:
 *                     type: string
 *                     example: "f9b1a5a6-89e2-4b11-82b4-f35f9b4c11db"
 *                   totalAmount:
 *                     type: number
 *                     format: float
 *                     example: 59.98
 *                   status:
 *                     type: string
 *                     example: "pending"
 *                   shippingAddress:
 *                     type: string
 *                     example: "123 Street, City, Country"
 *       404:
 *         description: Aucune commande trouvée
 */

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Récupérer une commande spécifique par ID
 *     tags:
 *       - Orders
 *     security:
 *       - jwt: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la commande à récupérer
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Commande récupérée avec succès
 *       404:
 *         description: Commande non trouvée
 */

module.exports = { restRouterorders };
  