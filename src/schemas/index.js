const getValidationWeathetSchema = {
  title: "Getting Weather",
  description: "Method example descriptions",
  querystring: {
    type: "object",
    properties: {
      city: { type: "string" },
    },
    required: ["city"],
  },
  response: {
    200: {
      type: "object",
      description: "Method response example",
      properties: {
        ishigher: { type: "boolean" },
      },
      required: ["ishigher"],
    },
  },
};

module.exports = {
  getValidationWeathetSchema,
};
