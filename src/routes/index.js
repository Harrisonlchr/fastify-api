const controllers = require('../controllers/weather.controllers');
const schemas = require('../schemas');

module.exports = (instance, opts, next) => {
  instance.route({
    url: '/ishigher',
    method: 'GET',
    handler: controllers.getValidationWeatherController,
    schema: schemas.getValidationWeathetSchema,
  });

  next();
};
