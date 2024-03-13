

const request = require('postman-request');



const geocode = (city, state, callback) => {
    const url = 'http://api.openweathermap.org/geo/1.0/direct?q='+ encodeURIComponent(city) +','+ state +',1&appid=82ce116fef7461f1900a7fcde78ad5d1';

    request({url: url, json: true}, (error, response) => {
        const data = response.body[0];
        callback(undefined, {
            latitude: data.lat,
            longtitude: data.lon,
            city: data.name,
            state: data.state,
            country: data.country
        });
    });
};

const weatherData = (lat, lon, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon='+ lon +'&units=imperial&appid=82ce116fef7461f1900a7fcde78ad5d1'

    request({url: url, json: true}, (error, response) => {
        const data = response.body;
        callback(undefined, {
            location: data.name,
            weather: data.weather[0].main,
            description: data.weather[0].description,
            tempature: data.main.temp
        });
    });
};




geocode('Garden Grove', 'CA', (error, data) => {
    console.log(data);
    
    weatherData(data.latitude, data.longtitude, (error, data) => {
        console.log(data);
    })

})




module.exports = geocode;