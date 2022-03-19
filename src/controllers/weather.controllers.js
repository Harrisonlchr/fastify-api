const services = require("../services/weather.services");

const getValidationWeatherController = async (request, reply) => {
  const {
    query: { city },
  } = request;
  const response = await services.getValidationWeatherService(city);
  reply.code(200).send(response);
};

module.exports = {
  getValidationWeatherController,
};