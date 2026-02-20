import Image from "next/image";
import "../globals.css";

export default function layout({children, aqi, weather, temperature,wind}) {
  return (
    <div className="grid min-h-screen place-content-center overflow-y-auto bg-[#19243B]" >
      <Image className="absolute top-0 left-0 right-0 z-10 object-cover w-full h-[70vh] max-lg:fixed max-lg:min-h-screen  " src="/images/background.png" height={1200} width={700} alt="bg-image" />
      <div className="absolute z-20 left-0 right-0 top-0 w-full h-[70vh] bg-[url('/images/gradient.png')] bg-cover bg-left-top bg-no-repeat max-lg:fixed max-lg:min-h-screen"></div>

      {children}
      {weather}
      {aqi}
      {wind}
      {temperature}
    </div>
  )
}
