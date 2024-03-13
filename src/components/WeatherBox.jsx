const WeatherBox = (props) => {
    return (
        
        <div className="weather-box">
            <h3>{props.today}</h3>
            <img src={props.img} alt="" />
            <p>{props.temp}</p>
        </div>
        
            
    );
}

export default WeatherBox;