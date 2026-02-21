import React from "react";
import Card from "./Card";
import Image from "next/image";
import { getWeatherData } from "@/lib/getWeatherData";

export default async function WeatherDataPage({lat, lon}) {

    const weatherData = await getWeatherData(lat, lon)

    const data = weatherData?.current?.weather[0];

    console.log(data)

  return (
    <Card>
      <div class="col-span-12 lg:col-span-4 2xl:col-span-3">
        <div class="card">
          <h6 class="feature-name">Current Weather</h6>
          <div class="feature-main">
            <Image
              class="max-w-20"
              src="/icons/icon_rain.png"
              alt="rain icon"
              width={100}
              height={100}
            />
            <h3 class="feature-title">Rain</h3>
            <span class="feature-name">Moderate Rain</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
