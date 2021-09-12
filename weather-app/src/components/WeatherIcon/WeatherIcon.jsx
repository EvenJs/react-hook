import React from 'react';

function WeatherIcon({ imageUrl, weatherDescription }) {
  return (
    <div>
      <img src={imageUrl} alt='weahter-icon' />
      <h3>{weatherDescription}</h3>
    </div>
  );
};

export default WeatherIcon;
