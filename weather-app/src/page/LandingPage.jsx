import React from 'react';
import Header from '../components/Header';
import WeatherIcon from '../components/WeatherIcon/WeatherIcon';

const imageUrl = 'https://openweathermap.org/img/wn/01d@2x.png';

function LandingPage() {
  return (
    <div>
      <Header location='Sydney' />
      <div>
        <WeatherIcon imageUrl={imageUrl} weatherDescription = 'sunny' />
        
      </div>
    </div>
  )
}

export default LandingPage;
