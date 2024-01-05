import "./current-weather.css"


const CurrentWeather = () => {

    return (

        <div className="weather-container">

            <div className="top-weather-info">
                <div>
                    <p className="city-name">Lisbon</p>
                    <p className="city-weather">Sunny</p>
                </div>
                <img alt="weather-icon" className="weather-icon" src="icons/01d.png"/>
            </div>

            <div className="bottom-weather-info">
                <p className="city-temperature">18C</p>
                <div className="city-weather-parameters">
                    <div className="parameter-item">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-item">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">15C</span>
                    </div>
                    <div className="parameter-item">
                        <span className="parameter-label">wind</span>
                        <span className="parameter-value">10 m/s</span>
                    </div>
                    <div className="parameter-item">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">30%</span>
                    </div>
                    <div className="parameter-item">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">15 hPa</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CurrentWeather;
