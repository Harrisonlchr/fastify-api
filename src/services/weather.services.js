const axios = require("axios");

const getValidationWeatherService = async ({ lat, lon, units, compare }) => {
  try {
    const response = await axios({
      method: "get",
      url: process.env.WEATHER_API_URL,
      params: {
        lat,
        lon,
        units,
        appid: process.env.WEATHER_API_KEY,
      },
    });

    let ishigher = false;
    if (response.data.current.temp > compare) ishigher = true;
    return { ishigher };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getValidationWeatherService,
};
