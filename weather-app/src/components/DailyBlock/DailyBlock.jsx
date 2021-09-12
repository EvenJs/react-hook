import React from 'react';

const days =['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function DailyBlock({week, url, temperature, weather}) {
  const time = new Date(week).getDay();

  return (
    <div>
      <div>{days[time]}</div>
      <img src={url} alt='weather-icon' />
      <div>{weather}</div>
      <h3>{temperature} ℃ </h3>
    </div>
  );
};

export default DailyBlock;
