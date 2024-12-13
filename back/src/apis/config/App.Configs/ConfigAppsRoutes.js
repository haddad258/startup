
const express = require("express");
const ConfigAppsController = require("./ConfigAppsController");
const authJwt = require("../../../middlewares/jwt.validations/authJwt");
const restRouterconfigApp = express.Router();

restRouterconfigApp.post("/entity/:entity", [authJwt.verifyToken],  ConfigAppsController.addConfigApps);
restRouterconfigApp.put("/entity/:entity/:id", [authJwt.verifyToken],  ConfigAppsController.updateConfigApps);
restRouterconfigApp.get("/entity/:entity",  /* [authJwt.verifyToken], */  ConfigAppsController.getAllConfigApps);
restRouterconfigApp.get("/:id", [authJwt.verifyToken],  ConfigAppsController.getConfigAppsById);
restRouterconfigApp.get("/images/:id",  [authJwt.verifyToken],  ConfigAppsController.getImagesArticles);

/**
 * @swagger
 * /items:
 *   post:
 *     summary: Créer un nouvel item
 *     tags:
 *       - Items
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
 *                 example: "Sample Item"
 *               barcode:
 *                 type: string
 *                 example: "987654321"
 *               price:
 *                 type: number
 *                 format: float
 *                 example: 29.99
 *               quantity:
 *                 type: integer
 *                 example: 50
 *               description:
 *                 type: string
 *                 example: "A sample item description."
 *     responses:
 *       200:
 *         description: Item créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Item created successfully"
 *                 status:
 *                   type: integer
 *                   example: 200
 *                 data:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     barcode:
 *                       type: string
 *                     price:
 *                       type: number
 *                       format: float
 *                     quantity:
 *                       type: integer
 *                     description:
 *                       type: string
 *       400:
 *         description: Données invalides
 */

/**
 * @swagger
 * /items/{id}:
 *   put:
 *     summary: Mettre à jour un item existant par ID
 *     tags:
 *       - Items
 *     security:
 *       - jwt: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de l'item à mettre à jour
 *         required: true
 *         type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Updated Item"
 *               barcode:
 *                 type: string
 *                 example: "987654322"
 *               price:
 *                 type: number
 *                 format: float
 *                 example: 35.99
 *               quantity:
 *                 type: integer
 *                 example: 30
 *               description:
 *                 type: string
 *                 example: "Updated item description."
 *     responses:
 *       200:
 *         description: Item mis à jour avec succès
 *       404:
 *         description: Item non trouvé
 *       400:
 *         description: Données invalides
 */

/**
 * @swagger
 * /items:
 *   get:
 *     summary: Récupérer tous les items
 *     tags:
 *       - Items
 *     security:
 *       - jwt: []
 *     responses:
 *       200:
 *         description: Liste des items
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
 *                   name:
 *                     type: string
 *                     example: "Sample Item"
 *                   barcode:
 *                     type: string
 *                     example: "987654321"
 *                   price:
 *                     type: number
 *                     format: float
 *                     example: 29.99
 *                   quantity:
 *                     type: integer
 *                     example: 50
 *                   description:
 *                     type: string
 *                     example: "A sample item description."
 *       404:
 *         description: Aucun item trouvé
 */

/**
 * @swagger
 * /items/{id}:
 *   get:
 *     summary: Récupérer un item spécifique par ID
 *     tags:
 *       - Items
 *     security:
 *       - jwt: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de l'item à récupérer
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Item récupéré avec succès
 *       404:
 *         description: Item non trouvé
 */
module.exports = { restRouterconfigApp };
  