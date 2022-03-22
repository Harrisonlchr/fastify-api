const getValidationWeathetSchema = {
  title: 'Getting Weather',
  description: 'Method example descriptions',
  querystring: {
    type: 'object',
    properties: {
      lat: { type: 'string' },
      lon: { type: 'string' },
      units: {
        type: 'string',
        enum: ['standard', 'metric', 'imperial'],
        default: 'metric',
      },
      compare: { type: 'number', default: 15 },
    },
    required: ['lat', 'lon'],
  },
  response: {
    200: {
      type: 'object',
      description: 'Method response example',
      properties: {
        ishigher: { type: 'boolean' },
      },
      required: ['ishigher'],
    },
  },
};

module.exports = {
  getValidationWeathetSchema,
};
