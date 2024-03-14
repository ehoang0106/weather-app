import { useEffect, useState } from "react";

const Test = () => {
    
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

    
    return (  
        <div>{temp}</div>
    );
}

export default Test;