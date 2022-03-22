const services = require('../services/weather.services');

const getValidationWeatherController = async (request, reply) => {
  const { query } = request;
  const response = await services.getValidationWeatherService(query);
  reply.code(200).send(response);
};

module.exports = {
  getValidationWeatherController,
};
