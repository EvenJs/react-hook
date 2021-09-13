import React from 'react';
import css from './weatherDetail.module.scss'

const getType = (type) => ({
  humidity: 'Humidity',
  wind_speed: 'Wind Speed',
  sunrise: 'Sunrise Time',
  sunset:'Sunset Time',
}[type]);

const getPrefix = (type) => ({
  humidity: '%',
  wind_speed: 'kms/h',
  sunrise: '',
  sunset: '',
}[type]);

function WeatherDetail({ type, value }) {
  return (
    <div className={css.detailBlock}>
      <h3>{getType(type)}</h3>
      <div>{`${value} ${getPrefix(type)}`} </div>
    </div>
  );
};

export default WeatherDetail;
