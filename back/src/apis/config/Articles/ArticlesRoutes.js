const express = require("express");
const ArticlesController = require("./ArticlesController");
const authJwt = require("../../../middlewares/jwt.validations/authJwt");
const restRouterarticles = express.Router();


restRouterarticles.post("/", [authJwt.verifyToken],  ArticlesController.addArticles);
restRouterarticles.put("/:id", [authJwt.verifyToken],  ArticlesController.updateArticles);
restRouterarticles.get("/", [authJwt.verifyToken],  ArticlesController.getAllArticless);
restRouterarticles.get("/:id", [authJwt.verifyToken],  ArticlesController.getArticlesById);

module.exports = { restRouterarticles };

/**
 * @swagger
 * /articles:
 *   post:
 *     summary: Créer un nouvel article
 *     tags:
 *       - Articles
 *     security:
 *       - jwt: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               categoryId:
 *                 type: string
 *                 example: "b79f5b94-e20e-49f2-b1a3-849b1984d60e"
 *               itemkitId:
 *                 type: string
 *                 example: "a563fd2f-ec3c-48a0-9b2b-d8e1cbb6d83c"
 *               itemId:
 *                 type: string
 *                 example: "f893d4a3-0730-4b6e-bd38-72a2314a0459"
 *               brandId:
 *                 type: string
 *                 example: "6c4fbd23-2453-40b4-a47c-98f798c1d35f"
 *               providersId:
 *                 type: string
 *                 example: "owner"
 *               name:
 *                 type: string
 *                 example: "Sample Article"
 *               barcode:
 *                 type: string
 *                 example: "123456789"
 *               loyalty:
 *                 type: integer
 *                 example: 10
 *               description:
 *                 type: string
 *                 example: "A sample article description"
 *               price:
 *                 type: number
 *                 format: float
 *                 example: 25.99
 *               images:
 *                 type: string
 *                 example: "http://example.com/sample.jpg"
 *     responses:
 *       200:
 *         description: Article créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Nouvel article créé"
 *                 status:
 *                   type: integer
 *                   example: 200
 *                 data:
 *                   type: object
 *                   properties:
 *                     categoryId:
 *                       type: string
 *                     itemkitId:
 *                       type: string
 *                     itemId:
 *                       type: string
 *                     brandId:
 *                       type: string
 *                     providersId:
 *                       type: string
 *                     name:
 *                       type: string
 *                     barcode:
 *                       type: string
 *                     loyalty:
 *                       type: integer
 *                     description:
 *                       type: string
 *                     price:
 *                       type: number
 *                       format: float
 *                     images:
 *                       type: string
 *       400:
 *         description: Entrée invalide
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */

/**
 * @swagger
 * /articles/{id}:
 *   put:
 *     summary: Mettre à jour un article existant par ID
 *     tags:
 *       - Articles
 *     security:
 *       - jwt: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de l'article à mettre à jour
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
 *                 example: "Updated Article"
 *               price:
 *                 type: number
 *                 format: float
 *                 example: 30.99
 *               loyalty:
 *                 type: integer
 *                 example: 15
 *               description:
 *                 type: string
 *                 example: "Updated description"
 *               images:
 *                 type: string
 *                 example: "http://example.com/updated_sample.jpg"
 *     responses:
 *       200:
 *         description: Article mis à jour avec succès
 *       400:
 *         description: Données d'entrée invalides
 *       404:
 *         description: Article non trouvé
 */

/**
 * @swagger
 * /api/config/apps/entity/items:
 *   get:
 *     summary: Récupérer tous les articles
 *     tags:
 *       - Articles
 *     security:
 *       - jwt: []
 *     responses:
 *       200:
 *         description: Liste des articles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "f1d2f2d7-eeb2-4b1d-bfc4-bd2402f913f7"
 *                   categoryId:
 *                     type: string
 *                   itemkitId:
 *                     type: string
 *                   itemId:
 *                     type: string
 *                   brandId:
 *                     type: string
 *                   providersId:
 *                     type: string
 *                   name:
 *                     type: string
 *                   barcode:
 *                     type: string
 *                   loyalty:
 *                     type: integer
 *                   description:
 *                     type: string
 *                   price:
 *                     type: number
 *                     format: float
 *                   images:
 *                     type: string
 *       404:
 *         description: Articles non trouvés
 */

/**
 * @swagger
 * /articles/{id}:
 *   get:
 *     summary: Récupérer un article spécifique par ID
 *     tags:
 *       - Articles
 *     security:
 *       - jwt: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de l'article à récupérer
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Article récupéré avec succès
 *       404:
 *         description: Article non trouvé
 */
  