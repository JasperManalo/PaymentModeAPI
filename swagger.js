const path = require('path');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerui = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Payment Mode API',
            version: '1.0.0',
            description: 'API documentation for Payment Mode API'
        },
        servers: [
            { url: 'http://localhost:3001', description: 'Local server' }
        ],
    },
    apis:[
        path.join(__dirname, 'swaggerdocs', 'paymentmode.swaggerdocs.js'),
    ],
};

const swaggerSpec = swaggerJSDoc(options);

function setupSwagger(app) {
    app.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerSpec));
}

module.exports = setupSwagger;