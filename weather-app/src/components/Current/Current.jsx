import React from 'react';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import WeatherDetail from '../WeatherDetail/WeatherDetail';
import css from './current.module.scss';

function Current({baseURL, iconId, weather, input }) {
  return(
    <div className={css.current}>
      <WeatherIcon 
        imageUrl={`${baseURL}${iconId}@2x.png`} 
        weatherDescription={weather} 
      />
      <div className={css.detail}>
        {input.map((data, index) => (
          <WeatherDetail key={index} type={data.type} value={data.value} />
        ))}
      </div>
    </div>
  )
}

export default Current;
