export const convertKelvinToFahrenheit = (k) => Math.round((k - 273.15) * 9 / 5 + 32);

export const getDay = (date) => {
  const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
  const d = new Date(date);
  return days[d.getDay()];
}