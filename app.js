


async function Weatherapp() {
  const apiKey = 'c692761d5dfbde38069b07870aa08f5e';
  const cityInput = document.getElementById('cityinput').value;

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${apiKey}`);

    console.log(response);

    const data = await response.json();

    if (data.cod === '404') {
      displayWeatherError('City not found');
    } else {
      // console.log(data);
      displayWeather(data);
    }
  } catch (error) {
    // console.error('Error fetching weather data:', error);
    displayWeatherError('An error occurred');
  }
}

function displayWeather(weatherData) {
  console.log(weatherData);
  const weatherInfoContainer = document.getElementById('weatherinfo');
  // const { name, main, weather,img } = weatherData;
  const weatherhtml = `
    
      <h2>Temperature: ${weatherData.main.temp}°C</h2>
      <h2> humidity: ${weatherData.main.humidity} </h2>
      <h2> Speed: ${weatherData.wind.speed} </h2>
    
    
<img  class="img" src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" alt=" ">

     `;

  weatherInfoContainer.innerHTML = weatherhtml;
}

function displayWeatherError(errorMessage) {
  const weatherInfoContainer = document.getElementById('weatherinfo');
  weatherInfoContainer.innerHTML = `<p>${errorMessage}</p>`;
}
