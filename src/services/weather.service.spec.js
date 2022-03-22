const { getValidationWeatherService } = require("./weather.services");
const axios = require("axios");

jest.mock("axios");
jest.mock("./weather.services", () => {
  return { getValidationWeatherService: jest.fn(() => data) };
});

const data = {
  lat: 40.12,
  lon: -96.66,
  timezone: "America/Chicago",
  timezone_offset: -18000,
  current: {
    dt: 1595243443,
    sunrise: 1595243663,
    sunset: 1595296278,
    temp: 293.28,
    feels_like: 293.82,
    pressure: 1016,
    humidity: 100,
    dew_point: 293.28,
    uvi: 10.64,
    clouds: 90,
    visibility: 10000,
    wind_speed: 4.6,
    wind_deg: 310,
    weather: [
      {
        id: 501,
        main: "Rain",
        description: "moderate rain",
        icon: "10n",
      },
      {
        id: 201,
        main: "Thunderstorm",
        description: "thunderstorm with rain",
        icon: "11n",
      },
    ],
    rain: {
      "1h": 2.93,
    },
  },
};
const request = {
  lat: 40.12,
  lon: -96.66,
}
describe("weather service", () => {
    it("when API call is successful should return users list", async () => {

      axios.get.mockResolvedValueOnce();
      const result = await getValidationWeatherService(request);
      expect(result).toEqual(data);
    });
  });