import "./current-weather.css"


const CurrentWeather = ({data}) => {

    return (

        <div className="weather-container">
            
            <div className="top-weather-info">
                <div className="city-name-and-description">
                    <p className="city-name">{data.city}</p>
                    <p className="city-weather">{data.weather[0].description}</p>
                </div>
                <div className="temperature-icon-info">
                    <p className="city-temperature">{Math.round(data.main.temp)}°C</p>
                    <div className="icon-weather-info">
                        <img alt="weather-icon" className="weather-icon" src={`icons/${data.weather[0].icon}.png`}/>
                    </div>
                </div>
            </div>



            <div className="bottom-weather-info">
                <div className="city-weather-parameters">
                    <div className="parameter-item">
                        <span className="parameter-label">Min/Max°C</span>
                        <span className="parameter-value">{data.main.temp_min}°C / {data.main.temp_max}°C</span>
                    </div>
                    <div className="parameter-item">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-item">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{data.wind.speed}m/s</span>
                    </div>
                    <div className="parameter-item">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CurrentWeather;
