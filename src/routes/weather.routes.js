const controllers = require("../controllers/weather.controllers");
const schemas = require("../schemas");

const route = [
      {
        url: "/ishigher",
        method: "GET",
        handler: controllers.getValidationWeatherController,
        schema: schemas.getValidationWeathetSchema
      }
    ];

module.exports = route;
