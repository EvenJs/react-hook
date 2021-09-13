import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Current from '../components/Current';
import Forecast from '../components/Forecast/Forecast';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar/SearchBar';

import css from './landingPage.module.scss';

const imageUrl = 'https://openweathermap.org/img/wn/01d@2x.png';

function LandingPage() {
  const [location, setLocation] = useState('Sydney');
  //const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [forecastData, setForecastData] = useState([]);
  const [currentDetail, setCurrentDetail] = useState([]);

  const updateLocation = (text) => {
    const newlocation = text;
    setLocation(newlocation);
  }

  useEffect(() => {
    const getWeatherData = async() => {
      const {data} = await axios.get(`https://jr-weather-app-server.herokuapp.com/api/weather/${location}`)
      console.log('1', data.data.current.detail);
      const rawData = data.data;
    
      //setWeatherData(rawData);
      setForecastData(rawData.daily)
      setLocation(rawData.city.name)
      setCurrentDetail(rawData.current.detail)
      // console.log( '2',rawData.current.detail)
    }
    getWeatherData(location);
    setLoading(false);
  },[location]);
  // console.log('111', weatherData)

  return (
    loading ? (
      <div> Loading </div>
    ) : (
    <div className={css.landingpage }>
      <Header location={location} />
      <SearchBar updateLocation={updateLocation } />
      <div>
        <Current imageUrl={imageUrl} input={currentDetail} />
      </div>
      <Forecast input={forecastData} />
    </div>
    )
  )
}

export default LandingPage;
