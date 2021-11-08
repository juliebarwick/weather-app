import { convertKelvinToFahrenheit, getDay } from '../utils/convert';
import './WeatherCard.css';

function WeatherCard({ weather }) {

  return (
    <div className="weather-card">
      {getDay(weather.dt_txt)}
      {convertKelvinToFahrenheit(weather.main.temp_min)}&deg;
      <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`${weather.weather[0].description} icon`}/>
      {convertKelvinToFahrenheit(weather.main.temp_max)}&deg;
      {/* {weather.weather[0].description} */}
    </div>
  );
}

export default WeatherCard;