const container = document.querySelector('.container');
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search input');
const weatherBox = document.querySelector('.weather');


searchBtn.addEventListener('click', async () => {
  const APIKey = '3a58c7551fba26f28fc0cd7a6fc59336';
  const city = searchInput.value;
  if (city === '') {
    return;
  }
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {
        const weatherImg = document.querySelector('.weather .weather-img img');
        const weatherDesc = document.querySelector('.weather-info .weather-desc');
        const temp = document.querySelector('.temp');
        const humidity = document.querySelector('.humidity span');
        const wind = document.querySelector('.wind-speed .text p');

        switch (json.weather[0].main) {
            case 'Clouds':
                weatherImg.src = './images/cloud.svg';
                break;
            case 'Haze':
                weatherImg.src = './images/semiSun.svg';
                break;
            case 'Rain':
                weatherImg.src = './images/rain.svg';
                break;
            case 'mist':
                weatherImg.src = './images/Sun.svg';
                break;
            case 'Snow':
                weatherImg.src = './images/Light.svg';
                break;
            default:
                weatherImg.src = './images/cloud.svg';
        }

        temp.innerHTML = `${parseInt(json.main.temp)}<span>&deg;</span>`;
        weatherDesc.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
       
        
    });
});





