/* eslint-disable import/newline-after-import */
const fastify = require('fastify')({
  logger: true,
});

// ROUTES
fastify.register(require('./routes'));
// ROUTES

// SWAGGER
const swagger = require('./utils/swagger');
fastify.register(require('fastify-swagger'), swagger.options);
// SWAGGER

// ENV
fastify.register(require('fastify-env'), {
  dotenv: true,
  schema: {
    type: 'object',
    properties: {
      WEATHER_API_URL: {
        type: 'string',
        default: '',
      },
      WEATHER_API_KEY: {
        type: 'string',
        default: '',
      },
    },
  },
});
// ENV

const start = async () => {
  await fastify.listen(3000);
  fastify.log.info(`server listening on ${fastify.server.address().port}`);
};
start();
