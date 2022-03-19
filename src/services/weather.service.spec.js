const { getValidationWeatherService } = require("./weather.services");

describe("weather service", () => {
  const city = "Buenos aires";

  it("should be truthy", async () => {
    const response = await getValidationWeatherService(city);
    expect(response.ishigher).toBeTruthy();
  });

  it("should be error", async () => {
    try {
      const response = await getValidationWeatherService(15);
    } catch (e) {
      expect(e).toMatch("Request failed with status code 404");
    }
  });
});
