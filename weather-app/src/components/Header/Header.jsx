import React, { useState, useEffect } from 'react';

function Header({location}) {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date())
  }
  
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanIp() {
      clearInterval(timerId);
    };
  }, []);

return (
  <div>
    <div> {date.toLocaleDateString()} </div>
    <div>{ location }</div>
  </div>
)
}

export default Header;
