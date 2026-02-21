import AirPollutionPage from '@/components/AirPollutionPage'
import React from 'react'

export default function AqiPage({params : {location}, searchParams :{latitude, Longitude}}) {
  return (
    <div>
      <AirPollutionPage lat={latitude} lon={Longitude} ></AirPollutionPage>
    </div>
  )
}
