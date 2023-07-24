const dotenv = require('dotenv');

dotenv.config();

const RAPID_API_TRANSLATE_KEY = process.env.RAPID_API_TRANSLATE_KEY;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

module.exports = { RAPID_API_TRANSLATE_KEY, WEATHER_API_KEY };
