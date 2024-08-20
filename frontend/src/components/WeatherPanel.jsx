import React, { useState } from 'react';
import FormWeather from './FormWeather';
import CardWeather from './CardWeather';


const WeatherPanel = () => {
    const apiKey = "dee92cacb2733f8e743d8665f8345304"; // Clave de la API
    const baseWeatherUrl = "https://api.openweathermap.org/data/2.5/weather"; // URL base para obtener el clima actual
    const baseForecastUrl = "https://api.openweathermap.org/data/2.5/forecast"; // URL base para obtener la previsión del clima

    // Definición de estados
    const [weather, setWeather] = useState(null); // Estado para almacenar los datos del clima actual
    const [forecast, setForecast] = useState(null); // Estado para almacenar los datos de la previsión del clima
    const [loading, setLoading] = useState(false); // Estado para manejar el estado de carga
    const [show, setShow] = useState(false); // Estado para manejar la visualización de los resultados
    const [location, setLocation] = useState(""); // Estado para almacenar la ubicación ingresada

    // Función que obtiene los datos del clima y previsión a partir de una ubicación
    const getLocation = async (loc) => {
        setLoading(true); // Activa el estado de carga
        setLocation(loc); // Guarda la ubicación ingresada

        // Construye las URLs para las peticiones de clima y previsión
        const weatherUrl = `${baseWeatherUrl}?appid=${apiKey}&lang=es&q=${loc}`;
        const forecastUrl = `${baseForecastUrl}?appid=${apiKey}&lang=es&q=${loc}`;

        try {
            // Fetch de los datos del clima
            const weatherResponse = await fetch(weatherUrl);
            if (!weatherResponse.ok) throw new Error("Weather data not found"); // Lanza error si la respuesta no es exitosa
            const weatherData = await weatherResponse.json();
            setWeather(weatherData); // Guarda los datos del clima en el estado

            // Fetch de los datos de la previsión
            const forecastResponse = await fetch(forecastUrl);
            if (!forecastResponse.ok) throw new Error("Forecast data not found"); // Lanza error si la respuesta no es exitosa
            const forecastData = await forecastResponse.json();
            setForecast(forecastData); // Guarda los datos de la previsión en el estado

            setShow(true); // Muestra los resultados
        } catch (error) {
            console.error(error); // Manejo de errores
            setShow(false); // Oculta los resultados en caso de error
        } finally {
            setLoading(false); // Finaliza el estado de carga
        }
    };

    // Renderizado del componente
    return (
        <div>
            <FormWeather newLocation={getLocation} /> {/* Formulario para ingresar la ubicación */}
            
            <CardWeather showData = {show} loadingData = {loading} weather = {weather} forecast = {forecast} /> 
        </div>
    );
};

export default WeatherPanel;
