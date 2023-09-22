async function getWeather() {
    const location = document.getElementById('locationInput').value;
    if (!location) {
        document.getElementById('weatherInfo').innerHTML = 'Please enter a location';
        return;
    }
    const apiKey = '43b33f36f1ba0c836db9944899253ecf';

    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === '404') {
            document.getElementById('weatherInfo').innerHTML = 'Weather Information not available';
        } else {
            const celsiusTemp = (data.main.temp - 273.15).toFixed(2);
            const fahrenheitTemp = ((celsiusTemp * 9/5) + 32).toFixed(2);

            const weatherInfo = `
                <h2>${data.name}</h2>
                <p>Temperature: ${celsiusTemp}°C / ${fahrenheitTemp}°F</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
            document.getElementById('weatherInfo').innerHTML = weatherInfo;
        }
    } catch (error) {
        console.log(error);
    }
}


/*function getWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = '43b33f36f1ba0c836db9944899253ecf';

    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                document.getElementById('weatherInfo').innerHTML = 'Weather Information not available';
            } else {
                const celsiusTemp = (data.main.temp - 273.15).toFixed(2);
                const fahrenheitTemp = ((celsiusTemp * 9/5) + 32).toFixed(2);

                const weatherInfo = `
                    <h2>${data.name}</h2>
                    <p>Temperature: ${celsiusTemp}°C / ${fahrenheitTemp}°F</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
                document.getElementById('weatherInfo').innerHTML = weatherInfo;
            }
        })
        .catch(err => console.log(err));
}*/ 
