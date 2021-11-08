import './WeatherPanel.css';
import WeatherCard from './WeatherCard';

function WeatherPanel ({ weatherData }) {
  return (

    weatherData.map((weather) => <WeatherCard weather={weather}/>)
  )
}

export default WeatherPanel;
