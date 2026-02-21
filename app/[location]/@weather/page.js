import WeatherDataPage from '@/components/WeatherDataPage'
import React from 'react'

export default function WeatherPage({params : {location}, searchParams :{latitude, longitude}}) {
  return (
    <div>
      <WeatherDataPage lat={latitude} lon={longitude}></WeatherDataPage>
    </div>
  )
}
