import { useEffect, useState } from "react";

const WeatherInfo = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = "f1ebabec549595bfc97958923762044c";

  useEffect(() => {
    const fetchWeather = async (lat, lon) => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        const data = await res.json();

        setWeather({
          temp: data.main.temp,
          condition: data.weather[0].main,
          city: data.name,
          country: data.sys.country,
        });
      } catch (err) {
        console.error("Weather API error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        },
        (error) => {
          console.error("Geolocation error:", error);
          setLoading(false);
        }
      );
    } else {
      console.error("Geolocation not supported.");
      setLoading(false);
    }
  }, []);

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  if (loading || !weather) {
    return (
      <div className="bg-secondary text-white text-center p-3 rounded mb-4">
        Getting weather info...
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-between align-items-center bg-primary text-white p-3 rounded mb-4">
      <div>
        <h5 className="mb-0">
          {weather.city}, {weather.country}
        </h5>
        <small>{today}</small>
      </div>
      <div className="text-end">
        <h4 className="mb-0">{Math.round(weather.temp)}°C</h4>
        <small>{weather.condition}</small>
      </div>
    </div>
  );
};

export default WeatherInfo;
