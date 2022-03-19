const axios = require("axios");

const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
const WEATHER_API_KEY = "31a8f29902bc4a2b09daed20ddfcd771";
const FORM = 273.15;
const VALIDATION = 15;

const getValidationWeatherService = async (city) => {
  try {
    const response = await axios.get(
      `${WEATHER_API_URL}/?q=${city}&appid=${WEATHER_API_KEY}`
    );
    let ishigher = false;
    if (response.data.main.temp - FORM > VALIDATION) ishigher = true;
    return { ishigher };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getValidationWeatherService,
};
