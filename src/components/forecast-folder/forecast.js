import "./forecast.css"

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]


const Forecast = ({data}) => {

    const eachDay = new Date().getDay();
    const forecastEachDay = weekDays.slice(eachDay, weekDays.length).concat(weekDays.slice(0, eachDay))

    return (
        <>

        <div className="forecast-daily-container">
            {data.list.slice(0, 5).map((item, index) => (
                <div key={index}>
                    <div className="day-container">
                        <p className="day">{forecastEachDay[index]}</p>
                    </div>
                    <div className="forecast-top-info">
                        <div>
                            <p className="forecast-day-temperature">{Math.round(item.main.temp)}°C</p>
                            <p className="forecast-description">{item.weather[0].description}</p>
                        </div>
                        <img alt="weather-icon" className="forecast-icon" src={`icons/${item.weather[0].icon}.png`}></img>
                    </div>

                    <div className="forecast-bottom-info">
                        <div className="forecast-item">
                            <span className="forecast-item-label">Min/Max°C</span>
                            <span className="forecast-item-value">{item.main.temp_min}°C / {item.main.temp_max}°C</span>
                        </div>
                        <div className="forecast-item">
                            <span className="forecast-item-label">Feels like</span>
                            <span className="forecast-item-value">{Math.round(item.main.feels_like)}°C</span>
                        </div>
                        <div className="forecast-item">
                            <span className="forecast-item-label">Humidity</span>
                            <span className="forecast-item-value">{item.main.humidity}%</span>
                        </div>
                        <div className="forecast-item">
                            <span className="forecast-item-label">Wind</span>
                            <span className="forecast-item-value">{item.wind.speed}m/s</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        </>
    )
}

export default Forecast;
