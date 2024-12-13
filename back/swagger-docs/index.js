const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const glob = require('glob');
const path = require('path');
const basicAuth = require('basic-auth');
const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "API",
        version: "1.0.0",
        description: "Document for platform",
        license: {
            name: "Licensed Under MIT",
            url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
            name: "H.rafik",
            url: "mailto:haddadrafik258@gmail.com",
        },
    },
    servers: [
        {
            url: "http://localhost:8009",
            description: "Development server",
        },
        {
            url: "http://bo.lcs",
            description: "API server",
        },
    ],
    components: {
        securitySchemes: {
            jwt: {
                type: "http",
                scheme: "bearer",
                in: "header",
                bearerFormat: "JWT",
            },
            basicAuth: {
                type: "http",
                scheme: "basic",  // This defines Basic Auth
            },
        },
    },
    security: [
        {
            jwt: [], // Utilisation de JWT pour la sécurité des API
        },
        {
            basicAuth: [] // Utilisation de Basic Auth pour Swagger UI
        }
    ],
};

// Utilisation de glob pour récupérer tous les fichiers .js dans les sous-dossiers de src
var listFilesDocs = glob.sync(path.join('./src/**/*.js'));

const options = {
    swaggerDefinition,
    apis: listFilesDocs,  // Charger les fichiers API
};

const swaggerSpec = swaggerJSDoc(options);


const swaggerAuthMiddleware = (req, res, next) => {
    const user = basicAuth(req);

    const validUser = {
        username: 'haddadLCS',  
        password: 'haddadLCS',  // Replace with your desired password
    };

    if (!user || user.name !== validUser.username || user.pass !== validUser.password) {
        res.set('WWW-Authenticate', 'Basic realm="401"');
        return res.status(401).send('Authentication required.');
    }

    next();
};

module.exports = { swaggerUi, swaggerSpec ,swaggerAuthMiddleware  };
