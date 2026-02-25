import React from "react";
import Card from "./Card";
import Image from "next/image";
import { getWeatherData } from "@/lib/getWeatherData";

export default async function WeatherDataPage({lat, lon}) {

    const {main, description}  = await getWeatherData(lat, lon)

    

    console.log("weather data here",main, description)

  return (
    <Card>
      <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
        <div className="card">
          <h6 className="feature-name">Current Weather here</h6>
          <div className="feature-main">
            <Image
              className="max-w-20"
              src="/icons/icon_rain.png"
              alt="rain icon"
              width={100}
              height={100}
            />
            <h3 className="feature-title">{main}</h3>
            <span className="feature-name">{description}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
