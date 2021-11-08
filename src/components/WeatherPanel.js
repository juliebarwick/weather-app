import styles from './WeatherPanel.module.css';
import WeatherCard from './WeatherCard';

function WeatherPanel ({ weatherData }) {
  return (
    <div className={styles.panel}>
      {weatherData.map((weather, index) => (
        <WeatherCard
          weather={weather}
          key={weather.dt}
          current={index === 0 ? true : false}
          />
      ))}
    </div>
  );
}

export default WeatherPanel;
