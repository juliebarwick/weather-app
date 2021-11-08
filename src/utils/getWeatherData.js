export async function getWeatherData(city) {
  const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}`;
  const response = await fetch(weatherUrl);
  return response.json();
}

