import AirPollutionPage from '@/components/AirPollutionPage'
import React from 'react'

export default function AqiPage({params : {location}, searchParams :{latitude, longitude}}) {
  return (
    <div>
      <AirPollutionPage lat={latitude} lon={longitude} ></AirPollutionPage>
    </div>
  )
}
