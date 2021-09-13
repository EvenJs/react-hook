import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Current from '../components/Current';
import Forecast from '../components/Forecast/Forecast';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import css from './landingPage.module.scss';

const baseURL= 'https://openweathermap.org/img/wn/';

function LandingPage() {
  const [location, setLocation] = useState('Sydney');
  const [loading, setLoading] = useState(true);
  const [forecastData, setForecastData] = useState([]);
  const [currentDetail, setCurrentDetail] = useState([]);
  const [currentIcon,setCurrentIcon] = useState('');
  const [currentWeather, serCurrentWeather] = useState('');
  const [timeShift, setTimeShitf] = useState('');

  const updateLocation = (text) => {
    const newlocation = text;
    setLocation(newlocation);
  }

  useEffect(() => {
    const getWeatherData = async() => {
      const {data} = await axios.get(`https://jr-weather-app-server.herokuapp.com/api/weather/${location}`);
      const rawData = data.data;
    
      setForecastData(rawData.daily);
      setLocation(rawData.city.name);
      setCurrentDetail(rawData.current.detail);
      setCurrentIcon(rawData.current.weatheIcon);
      serCurrentWeather(rawData.current.weather);
      setTimeShitf(rawData.time.timeShift);
      console.log('2', rawData);
    };

    getWeatherData(location);
    setLoading(false);
  },[location]);

  return (
    loading ? (
      <div> Loading </div>
    ) : (
    <div className={css.landingpage }>
      <Header location={location} />
      <SearchBar updateLocation={updateLocation } />
      <div>
        <Current
          baseURL={baseURL}
          iconId={currentIcon}
          weather={currentWeather}
          input={currentDetail}
        />
      </div>
      <Forecast 
        input={forecastData}
        timeShift={timeShift}
        baseURL={baseURL}
      />
    </div>
    )
  )
};

export default LandingPage;
