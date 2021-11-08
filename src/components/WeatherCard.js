import { getDay } from '../utils/convert';
import styles from './WeatherCard.module.css';
import Temperature from './Temperature';

function WeatherCard({ weather, current }) {

  return (
    <div className={`${current ? styles.current : ''} ${styles.card}`}>
      <div className={`light ${styles.day}`}>{getDay(weather.dt_txt)}</div>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={`${weather.weather[0].description} icon`}
        />
      </div>
      <div className={styles.temperature}>
        <Temperature temp={weather.main.temp_max} />
        <Temperature light temp={weather.main.temp_min} />
      </div>
    </div>
  );
}

export default WeatherCard;