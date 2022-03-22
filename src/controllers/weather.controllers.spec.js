/* eslint-disable no-undef */
const { getValidationWeatherController } = require('./weather.controllers');

jest.mock('../services/weather.services', () => ({
  getValidationWeatherService: jest.fn(() => true),
}));

describe('weater controller', () => {
  const request = {
    log: { error: () => {}, warn: () => {}, debug: () => {} },
    body: {},
    params: {},
    query: {
      lat: '30.489772',
      lon: '-99.771335',
    },
  };
  const reply = {
    code: jest.fn((code) => ({
      send: (data) => ({ statusCode: code, body: data }),
    })),
    send: jest.fn((data) => ({ statusCode: 200, body: data })),
  };

  it('should return status code 200', async () => {
    await getValidationWeatherController(request, reply);
    expect(reply.code).toHaveBeenCalledWith(200);
  });

  it('should be truthy', async () => {
    await getValidationWeatherController(request, reply);
    expect(reply.code).toBeTruthy();
  });
});
