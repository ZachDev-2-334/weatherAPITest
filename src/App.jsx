import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { getWeather } from "./services/weatherApi";
import WeatherCard from "./components/WeatherCard";
import HourlyForecast from "./components/HourlyForecast";
import "./App.css";

function App() {
  
  const [city, setCity] = useState("");
  
  const [weather, setWeather] = useState(null);
  const [hourly, setHourly] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch() {
    try {
      setLoading(true);
      setError("");

      const data = await getWeather(city)
      setWeather(data.current)
      setHourly(data.forecast)

    } catch (error) {
      setError("City not found. Please try again.");
      setWeather(null);

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <h1>Weather Dashboard</h1>

      <SearchBar
        city={city}
        setCity={setCity}
        onSearch={handleSearch}
      />

      {loading && <p>Loading weather...</p>}

      {error && <p>{error}</p>}

      {weather && <WeatherCard weather={weather} />}

      {hourly.length > 0 && <HourlyForecast hourly={hourly} />}
    </div>
  );
}

export default App;