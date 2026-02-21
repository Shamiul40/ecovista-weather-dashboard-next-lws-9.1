import { getAirPollutionWeatherData } from '@/lib/getWeatherData'
import React from 'react'

export default async function AirPollutionPage({lat, lon}) {

    const airPollutionData = await getAirPollutionWeatherData(lat, lon)
    console.log(airPollutionData)



  return (
    <div>
      air pollution components
    </div>
  )
}
