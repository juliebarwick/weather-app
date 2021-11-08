import styles from './App.module.css';
import { useEffect, useState } from 'react';
import { getWeatherData } from './utils/getWeatherData';
import WeatherPanel from './components/WeatherPanel';
import { sampleData } from './utils/sampleData';

function App() {
  const filterData = (data) => {
    return data.filter((item, index) => {
      return index % 8 === 0;
    });
  }

  const intialData = filterData(sampleData.list);
  const [weatherData, setWeatherData] = useState(intialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    getWeatherData('san francisco')
      .then((data) => setWeatherData(filterData(data.list)))
      .catch((err) => setIsError(true))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <div className={styles.container}>
      {!isError && !isLoading
        ? (
          <WeatherPanel
            weatherData={weatherData}
          />
        )
        : null
      }
    </div>
  );
}

export default App;
