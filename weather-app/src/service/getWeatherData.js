import axios from 'axios';

async function getWeatherData(location) {
    const { data } = await axios(`https://jr-weather-app-server.herokuapp.com/api/weather/${location}`)
      // .then(res => res.data)
      // .then(data => {return data.data});
      console.log(data.data)
    return data.data;
    // return returndata;
} 

export default getWeatherData;
