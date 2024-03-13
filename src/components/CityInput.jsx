import { useState } from "react";

const CityInput = (props) => {

    const [value, setValue] = useState("");

    const [city, setCity] = useState("");


    function handleClick() {
        setCity(value);
    }

    function handleChange(event) {
        setValue(event.target.value);
        
    }

    

    return (
        <div>
            
            <h1>{city}</h1>
            <input
                type="text"
                placeholder="Enter a city..."
                onChange={handleChange}
                
            />

            <button onClick={handleClick}>
                Submit
            </button>

        </div>


    );
}

export default CityInput;