import * as koa from 'koa';
// import * as R from 'koa-router'
import Router from './api/api'
// const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
        info: {
            title: 'Hello World', // Title (required)
            version: '1.0.0', // Version (required)
        },
    },
    // Path to the API docs
    apis: ['./api/api.ts'],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
// const swaggerSpec = swaggerJSDoc(options);
const app = new koa()

// Router.get('/api-docs.json', (ctx, next) => {
//     ctx.res.setHeader('Content-Type', 'application/json');
//     ctx.body = swaggerSpec;
// });
app.use(Router.routes());
app.use(Router.allowedMethods());
app.listen(9090)