import { getAirPollutionWeatherData } from "@/lib/getWeatherData";
import React, { Children } from "react";
import Card from "./Card";
import Image from "next/image";

export default async function AirPollutionPage({ lat, lon }) {
  const airPollutionData = await getAirPollutionWeatherData(lat, lon);

  // console.log(airPollutionData)
  const { main, components } = airPollutionData.list[0];
  console.log(main, components);

  const  getAqiStatus =(aqi)=>{
    
    switch(aqi) {
      case  1 :
      return "good"
      break
      case 2 :
        return "fair"
      break
      case 3 :
        return "moderate";
        break
      case 4 :
        return "poor"
        break
      case 5 :
        return "very poor"
      break
      default:
        return "unknown"
    }

  }
  
    

  return (
    <Card>
      <h6 className="feature-name">Air Pollution & Quality</h6>

      <div className="mt-3 space-y-2 lg:space-y-3">
        {/* <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icons/icon_air_element.png"
              alt="icon"
              width={100}
              height={100}
            />
            Air Quality Index
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {getAqiStatus(main.aqi)}
          </span>
        </div>
      
        
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icons/icon_air_element.png"
              alt="icon"
              width={100}
              height={100}
            />
            Carbon Monoxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {components.co}µg/m³
          </span>
        </div>
        {/* <!-- item ends --> */}
        {/* <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icons/icon_air_element.png"
              alt="icon"
              width={100}
              height={100}
            />
            Nitric Oxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {components.no} ppm
          </span>
        </div>
        {/* <!-- item ends --> */}
        {/* <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icons/icon_air_element.png"
              alt="icon"
              width={100}
              height={100}
            />
            Nitrogen Dioxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {components.no2} ppm
          </span>
        </div>
        {/* <!-- item ends --> */}
        {/* <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icons/icon_air_element.png"
              alt="icon"
              width={100}
              height={100}
            />
            Ozone
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {components.o3} µg/m³
          </span>
        </div>
        {/* <!-- item ends --> */}
        {/* <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icons/icon_air_element.png"
              alt="icon"
              width={100}
              height={100}
            />
            Sulfur Dioxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {components.so2} ppm
          </span>
        </div>
        {/* <!-- item ends --> */}
        {/* <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icons/icon_air_element.png"
              alt="icon"
              width={100}
              height={100}
            />
            PM2.5
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {components.pm2_5} µg/m³
          </span>
        </div>
        {/* <!-- item ends --> */}
      </div>
      {/* <!-- info items ends --> */}
    </Card>
  );
}
