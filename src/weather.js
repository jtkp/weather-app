// https://openweathermap.org/current

const KEY = '3b9362ae31742e4c27104e27de475067';

async function getWeather() {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=${KEY}`, { mode: 'cors' });
  const data = await response.json();
  console.log(data);
}

export {
  getWeather,
};
