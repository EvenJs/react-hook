import React, { useState, useEffect } from 'react';
import Current from '../components/Current';
import Forecast from '../components/Forecast/Forecast';
import Header from '../components/Header';
// import getWeatherData from '../service/getWeatherData';
import axios from 'axios';
import SearchBar from '../components/SearchBar/SearchBar';

const imageUrl = 'https://openweathermap.org/img/wn/01d@2x.png';

function LandingPage() {
  const [location, setLocation] = useState('Sydney');
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [forecastData, setForecastData] = useState([]);

  const updateLocation = (text) => {
    const newlocation = text;
    setLocation(newlocation);
  }

  useEffect(() => {
    const getWeatherData = async() => {
      const {data} = await axios.get(`https://jr-weather-app-server.herokuapp.com/api/weather/${location}`)
      console.log('1', data.data);
      const rawData = data.data;
    
      setWeatherData(rawData);
      setForecastData(rawData.daily)
      setLocation(rawData.city.name)
    }
    getWeatherData(location);
    setLoading(false);
  },[location]);
  console.log('111', weatherData)

  return (
    loading ? (
      <div> Loading </div>
    ) : (
    <div>
      <Header location={location} />
      <SearchBar updateLocation={updateLocation } />
      <div>
        <Current imageUrl={imageUrl} />
      </div>
      <Forecast input={forecastData} />
    </div>
    )
  )
}

export default LandingPage;
