import React, { useState, useEffect } from 'react';
import Current from '../components/Current';
import Forecast from '../components/Forecast/Forecast';
import Header from '../components/Header';

const imageUrl = 'https://openweathermap.org/img/wn/01d@2x.png';
const input =  [
  {
      "time": 1631376000,
      "weather": "Clear",
      "weatherIcon": "01d",
      "temperature": 24.46
  },
  {
      "time": 1631462400,
      "weather": "Clouds",
      "weatherIcon": "02d",
      "temperature": 26.58
  },
  {
      "time": 1631548800,
      "weather": "Rain",
      "weatherIcon": "10d",
      "temperature": 29.3
  },
  {
      "time": 1631635200,
      "weather": "Rain",
      "weatherIcon": "10d",
      "temperature": 25.62
  },
  {
      "time": 1631721600,
      "weather": "Rain",
      "weatherIcon": "10d",
      "temperature": 26.22
  },
  {
      "time": 1631808000,
      "weather": "Rain",
      "weatherIcon": "10d",
      "temperature": 26.6
  },
];

function LandingPage() {
  const [location, setLocation] = useState('Sydney');
  
  return (
    <div>
      <Header location={location} />
      <div>
        <Current imageUrl={imageUrl} />
      </div>
      <Forecast input={input} />
    </div>
  )
}

export default LandingPage;
