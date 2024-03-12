

const MainWeather = () => {
    return (  
        <div className="main-weather">
            <div className="inner-main">
                <img src="https://raw.githubusercontent.com/alexkowsik/react-weather-app/master/src/images/01d.svg" alt="" />
            </div>

            <div className="today">
                <p>Today</p>
                <h2>New York</h2>
                <p>Temperature: 17 C</p>
                <p>Clear sky</p>
            </div>
        </div>

    );
}

export default MainWeather;