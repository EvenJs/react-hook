import React from 'react';
import DailyBlock from '../DailyBlock/DailyBlock';
import css from './forecast.module.scss';

function Forecast({ input, timeShift, baseURL }) {
  return(
    <div className={css.forecast}>
      {input.map((data, index) => (
        <DailyBlock
          key={index}
          week={data.time * 1000 + timeShift}
          url={`${baseURL}${data.weatherIcon}@2x.png`}
          weather={data.weather}
          temperature={data.temperature}
        />
      ))}
    </div>
  );
};

export default Forecast;
