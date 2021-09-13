import React from 'react';
import css from './weatherIcon.module.scss';

function WeatherIcon({ imageUrl, weatherDescription }) {
  return (
    <div className={css.holder}>
      <img src={imageUrl} alt='weahter-icon' />
      <h3>{weatherDescription}</h3>
    </div>
  );
};

export default WeatherIcon;
