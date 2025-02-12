import axios from 'axios';

const FORECAST_API_URL = process.env.FORECAST_API_URL || 'http://127.0.0.1:5000/forecast';

export const getForecastGraph = async (
) => {

  try {
    const response = await axios.post(FORECAST_API_URL, {
    });
  } catch (error) {
    console.error("Error calling Forecast API:", error);
    throw error;
  }
};
