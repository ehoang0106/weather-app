import CityInput from "./CityInput";
import WeatherBox from "./WeatherBox";


const MainWeather = () => {

    const date = new Date();
    const today = date.getDay();
    const weekdays = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ]



    return (
        <div className="container">

            <div className="city">
                <CityInput />
            </div>

            <div className="main">
                <div className="inner-main">
                    <img src="https://raw.githubusercontent.com/alexkowsik/react-weather-app/master/src/images/02d.svg" alt="" />
                </div>

                <div className="today">
                    <p>{weekdays[today-1]}</p>
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