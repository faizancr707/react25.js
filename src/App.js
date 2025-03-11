import React from 'react'
import { useState,useEffect } from 'react'
export default function App() {

  const [weather,setWeather] = useState(null);
  useEffect(()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        const latitude = position.coords.latitude;
        const longitude =position.coords.longitude;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=97b0ab05440927513c612eb684c48f2d`)
        .then((response)=>response.json())
        .then((data)=>setWeather(data))
      })
    }
  })

  return (
    <div>
      {weather ? (
        <div>
          <h2>Current Weather</h2>
          <p>Temperature : {weather.main.temp-273}°C</p>
          <p>Conditions : {weather.weather[0].description}</p>
        </div>
      ):
      <p>Loading...</p>
      }
    </div>
  )
}
