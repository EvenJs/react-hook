import React from 'react';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import WeatherDetail from '../WeatherDetail/WeatherDetail';
import css from './current.module.scss';

function Current({imageUrl, input }) {
  return(
    <div className={css.current}>
      <WeatherIcon imageUrl={imageUrl} weatherDescription = 'sunny' />
      <div className={css.detail}>
        {input.map((data) => (
          <WeatherDetail type={data.type} value={data.value} />
        ) )}
      </div>
     
    </div>
  )
}

export default Current;
