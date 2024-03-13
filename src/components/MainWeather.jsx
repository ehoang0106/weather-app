import WeatherBox from "./WeatherBox";


const MainWeather = () => {
    return (
        <div className="container">
            <div className="main">
                <div className="inner-main">
                    <img src="https://raw.githubusercontent.com/alexkowsik/react-weather-app/master/src/images/01d.svg" alt="" />
                </div>

                <div className="today">
                    <p>Today</p>
                    <h2>New York</h2>
                    <p>Temperature: 72 F</p>
                    <p>Clear Sky</p>
                </div>
            
            </div>


            <div className="weather">
                <WeatherBox />
                <WeatherBox />
                <WeatherBox />
                <WeatherBox />
            </div>
        </div>

    );
}

export default MainWeather;