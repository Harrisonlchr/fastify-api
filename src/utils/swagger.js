exports.options = {
    routePrefix: '/docs',
    exposeRoute: true,
    swagger: {
        info:{
            title: 'Node.js Fastify API',
            description: 'REST API with Node.js, Fastify framework',
            version: '0.0.1',
        },
    },
    host: 'localhost:3000',
    schemas: ["http"],
}