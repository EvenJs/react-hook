import React from 'react';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import WeatherDetail from '../WeatherDetail/WeatherDetail';

function Current({imageUrl}) {
  return(
    <WeatherIcon imageUrl={imageUrl} weatherDescription = 'sunny' />
  )
}

export default Current;
