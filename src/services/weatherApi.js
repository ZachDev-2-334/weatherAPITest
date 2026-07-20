import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function getWeather(city) {
  const [current, forecast] = await Promise.all([
    axios.get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    }),

    axios.get("https://api.openweathermap.org/data/2.5/forecast", {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    }),
  ]);

  
  return {
    current: current.data,
    forecast: forecast.data.list,
  };
}