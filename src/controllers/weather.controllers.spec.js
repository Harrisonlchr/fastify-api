const { getValidationWeatherController } = require("./weather.controllers");

jest.mock("../services/weather.services", () => {
  return { getValidationWeatherService: jest.fn(() => true) };
});

describe("weater controller", () => {
  const request = {
    log: { error: () => {}, warn: () => {}, debug: () => {} },
    body: {},
    params: {},
    query: {
      city: "Buenos Aires",
    },
  };
  const reply = {
    code: jest.fn((code) => {
      return {
        send: (data) => {
          return { statusCode: code, body: data };
        },
      };
    }),
    send: jest.fn((data) => {
      return { statusCode: 200, body: data };
    }),
  };

  it("should return status code 200", async () => {
    await getValidationWeatherController(request, reply);
    expect(reply.code).toHaveBeenCalledWith(200);
  });

  it("should be truthy", async () => {
    await getValidationWeatherController(request, reply);
    expect(reply.code).toBeTruthy();
  });
});
