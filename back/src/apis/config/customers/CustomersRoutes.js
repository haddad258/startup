
const express = require("express");
const CustomersController = require("./CustomersController");
const authJwt = require("../../../middlewares/jwt.validations/authJwt");
const restRoutercustomers = express.Router();

restRoutercustomers.post("/", [authJwt.verifyToken],  CustomersController.addCustomers);
restRoutercustomers.put("/:id", [authJwt.verifyToken],  CustomersController.updateCustomers);
restRoutercustomers.get("/", [authJwt.verifyToken],  CustomersController.getAllCustomers);
restRoutercustomers.get("/:id",[authJwt.verifyToken],  CustomersController.getCustomersById);
restRoutercustomers.put("/update/password/:id",  [authJwt.verifyToken],  CustomersController.updateUserPassword);
restRoutercustomers.get("/orders/list/:id",[authJwt.verifyToken],  CustomersController.getOrdersByIdCustomers);

module.exports = { restRoutercustomers };



/**
 * @swagger
 * /customers:
 *   post:
 *     summary: Ajouter un client
 *     tags:
 *       - Customers
 *     security:
 *       - jwt: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 example: "johndoe@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *               phone:
 *                 type: string
 *                 example: "+123456789"
 *               address:
 *                 type: string
 *                 example: "123 Main St, City, Country"
 *     responses:
 *       200:
 *         description: Client ajouté avec succès
 *       400:
 *         description: Données invalides
 */

/**
 * @swagger
 * /customers/{id}:
 *   put:
 *     summary: Mettre à jour un client
 *     tags:
 *       - Customers
 *     security:
 *       - jwt: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du client à mettre à jour
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe Updated"
 *               email:
 *                 type: string
 *                 example: "johndoeupdated@example.com"
 *               phone:
 *                 type: string
 *                 example: "+123456789"
 *               address:
 *                 type: string
 *                 example: "123 Main St, City, Country"
 *     responses:
 *       200:
 *         description: Client mis à jour avec succès
 *       404:
 *         description: Client non trouvé
 */

/**
 * @swagger
 * /customers:
 *   get:
 *     summary: Récupérer tous les clients
 *     tags:
 *       - Customers
 *     security:
 *       - jwt: []
 *     responses:
 *       200:
 *         description: Liste des clients récupérée avec succès
 *       404:
 *         description: Aucun client trouvé
 */

/**
 * @swagger
 * /customers/{id}:
 *   get:
 *     summary: Récupérer un client par ID
 *     tags:
 *       - Customers
 *     security:
 *       - jwt: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du client à récupérer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Client récupéré avec succès
 *       404:
 *         description: Client non trouvé
 */

/**
 * @swagger
 * /customers/update/password/{id}:
 *   put:
 *     summary: Mettre à jour le mot de passe du client
 *     tags:
 *       - Customers
 *     security:
 *       - jwt: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du client pour lequel le mot de passe est mis à jour
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newPassword:
 *                 type: string
 *                 example: "newpassword123"
 *     responses:
 *       200:
 *         description: Mot de passe mis à jour avec succès
 *       400:
 *         description: Mot de passe invalide
 */

/**
 * @swagger
 * /customers/orders/list/{id}:
 *   get:
 *     summary: Récupérer la liste des commandes d'un client
 *     tags:
 *       - Customers
 *     security:
 *       - jwt: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du client pour lequel les commandes sont récupérées
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Liste des commandes récupérée avec succès
 *       404:
 *         description: Aucune commande trouvée pour ce client
 */

// Routes pour Customers

