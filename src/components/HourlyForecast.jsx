function HourlyForecast({ hourly }) {
  return (
    <div className="hourly">
      <h2>Hourly Forecast</h2>

      <div className="hourly-list">
        {hourly.slice(0, 8).map((hour) => (
          <div key={hour.dt} className="hour-card">
            <p>{new Date(hour.dt * 1000).toLocaleTimeString([], {
              hour: "numeric",
            })}</p>

            <img
              src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
              alt={hour.weather[0].description}
            />

            <p>{Math.round(hour.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;