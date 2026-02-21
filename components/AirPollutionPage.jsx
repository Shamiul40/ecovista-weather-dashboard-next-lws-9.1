import { getAirPollutionWeatherData } from '@/lib/getWeatherData'
import React, { Children } from 'react'

export default async function AirPollutionPage({lat, lon}) {

    const airPollutionData = await getAirPollutionWeatherData(lat, lon)
    console.log(airPollutionData)



  return (
    <div >
        <div>
           
        </div>
      
    </div>
  )
}
