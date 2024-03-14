import { useEffect, useState } from "react";


import CityInput from "./CityInput";
import WeatherBox from "./WeatherBox";



const MainWeather = (props) => {

    const date = new Date();
    const day = date.getDay();
    const weekdays = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ]

    const today = weekdays[day-1];

    const currentDate = date.toLocaleDateString();

    //-------------------------------------------------------
    
    const city = "Ha Noi";
    const [temp, setTemp] = useState("");
    
    useEffect(() => {
        async function weatherData() {
            const response = await fetch (`https://api.openweathermap.org/data/2.5/forecast/?APPID=6557810176c36fac5f0db536711a6c52&q=${city}&units=imperial`);
    
            const data = await response.json();
            const temp = data.list[0].main.temp
            setTemp(temp);
            console.log(temp);
        }

        weatherData();
    }, []);



    //-------------------------------------------------------

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
                    <p>{today}, {currentDate}</p>
                    <h2>New York</h2>
                    <p>Temperature: {Math.floor(temp)} °F</p>
                    <p>Clear Sky</p>
                </div>
            
            </div>


            <div className="weather">
                <WeatherBox today={today} img={"https://raw.githubusercontent.com/alexkowsik/react-weather-app/master/src/images/01d.svg"} temp="72 F"/>
                <WeatherBox today={weekdays[day]} img={"https://raw.githubusercontent.com/alexkowsik/react-weather-app/0db0670c49fb9c4be1ef85c95b01714def7ad3ab/src/images/03n.svg"} temp="50 F"/>
                <WeatherBox today={weekdays[day+1]} img={"https://raw.githubusercontent.com/alexkowsik/react-weather-app/0db0670c49fb9c4be1ef85c95b01714def7ad3ab/src/images/09d.svg"} temp="49 F"/>
                <WeatherBox today={weekdays[day+2]} img={"https://raw.githubusercontent.com/alexkowsik/react-weather-app/0db0670c49fb9c4be1ef85c95b01714def7ad3ab/src/images/11n.svg"} temp="84 F"/>
            </div>
        </div>

    );
}

export default MainWeather;