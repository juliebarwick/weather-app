import { convertKelvinToFahrenheit } from '../utils/convert';

function Temperature({ temp, light }) {
  return (
    <div className={light ? 'light' : ''}>
      {convertKelvinToFahrenheit(temp)}&deg;
    </div>
  );
}

export default Temperature;
