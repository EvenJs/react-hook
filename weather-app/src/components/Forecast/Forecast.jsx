import React from 'react';
import DailyBlock from '../DailyBlock/DailyBlock';

function Forecast({input, timeShift, baseURL}) {
  return(
    <div>
      {input.map((data) => (
        <DailyBlock 
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
