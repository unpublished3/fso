import { useState, useEffect } from "react";
import service from "../services/service";

const Weather = ({ capital, lat, lng }) => {
  const [weather, setWeather] = useState([]);
  const baseUrl = "https://api.openweathermap.org/data/2.5/forecast?";
  useEffect(() => {
    console.log("?????");

    service.weatherInfo(baseUrl, lat, lng).then((data) => {
      setWeather(data);
      console.log(weather.list[0].weather[0].icon);
    });
  }, []);

  if (weather.length == 0) return <></>;
  else
    return (
      <>
        <h2>Weather in {capital}</h2>
        <p>Temperature {Number(weather.list[0].main.temp - 273.15).toFixed(2)} °C</p>
        <img src={`https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`} alt="weather icon" />
        <p>Wind {weather.list[0].wind.speed} m/s</p>
      </>
    );
};

export default Weather;
