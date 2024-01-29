
const API_KEY = "38f9264b8e345e5059d64b5e08c19663";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?";

async function getWeatherData(city, callback) {
    const url = `${BASE_URL}q=${city}&lang=fr&units=metric&appid=${API_KEY}`;

    try {
        const response = await fetch(url);
        const weatherData = await response.json();
        callback(null, weatherData);
    } catch (error) {
        callback(error, null);
    }
}

function printWeather(error, data) {
    if (error) {
        console.error("Erreur lors de la récupération des données météorologiques :", error);
    } else {
        console.log("Données météorologiques (en français) :", data);
    }
}

getWeatherData("sousse", printWeather);
