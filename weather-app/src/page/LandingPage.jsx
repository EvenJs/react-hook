import React, { useState, useEffect } from 'react';
import Current from '../components/Current';
import Forecast from '../components/Forecast/Forecast';
import Header from '../components/Header';
// import getWeatherData from '../service/getWeatherData';
import axios from 'axios';

const imageUrl = 'https://openweathermap.org/img/wn/01d@2x.png';
const input =  [
  {
      "time": 1631376000,
      "weather": "Clear",
      "weatherIcon": "01d",
      "temperature": 24.46
  },
  {
      "time": 1631462400,
      "weather": "Clouds",
      "weatherIcon": "02d",
      "temperature": 26.58
  },
  {
      "time": 1631548800,
      "weather": "Rain",
      "weatherIcon": "10d",
      "temperature": 29.3
  },
  {
      "time": 1631635200,
      "weather": "Rain",
      "weatherIcon": "10d",
      "temperature": 25.62
  },
  {
      "time": 1631721600,
      "weather": "Rain",
      "weatherIcon": "10d",
      "temperature": 26.22
  },
  {
      "time": 1631808000,
      "weather": "Rain",
      "weatherIcon": "10d",
      "temperature": 26.6
  },
];

function LandingPage() {
  const [location, setLocation] = useState('Sydney');
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);

  const updateLocation = (event) => {
    event.preventDefault();
    setLocation(event.target.value);
  }

  // const city = 'sydney';

  useEffect(() => {
    // const data = getWeatherData(location);
    //const a = Promise.resolve(data);

    const getWeatherData = async() => {
      const {data} = await axios.get(`https://jr-weather-app-server.herokuapp.com/api/weather/${location}`)
      console.log('1', data.data);
      const rawData = data.data;
      setWeatherData(rawData);
      setLocation(rawData.city.name)
    }
    getWeatherData(location);
    setLoading(false);
    // console.log(weatherData);
  },[]);
  console.log('111', weatherData)
    /*
    async function getWeatherData(location) {
      const { data } = await axios(`https://jr-weather-app-server.herokuapp.com/api/weather/${location}`)
        // .then(res => res.data)
        // .then(data => {return data.data});
        const rowData = data.data
        console.log(rowData)
        setWeatherData(rowData);
      // return returndata;
  } 
    getWeatherData(location);
  },[location])*/
  // const { name } = weatherData.city
  return (
    loading ? (
      <div> Loading </div>
    ) : (
    <div>
      <Header location={location} />
      <div>
        <Current imageUrl={imageUrl} />
      </div>
      <Forecast input={input} />
    </div>
    )
  )
}

export default LandingPage;
