import React from 'react';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import WeatherDetail from '../WeatherDetail/WeatherDetail';

function Current({imageUrl, input }) {
  return(
    <div>
      <WeatherIcon imageUrl={imageUrl} weatherDescription = 'sunny' />
      <div>
        {input.map((data) => (
          <WeatherDetail type={data.type} value={data.value} />
        ) )}
      </div>
     
    </div>
  )
}

export default Current;
