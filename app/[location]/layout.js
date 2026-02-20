import Image from "next/image";
import "../globals.css";

export default function layout({children, aqi, weather, temperature,wind}) {
  return (
    <div className="grid min-h-screen place-content-center overflow-y-auto bg-[#19243B]" >
      <Image className="absolute top-0 left-0 right-0 z-10 object-cover w-full h-[70vh] max-lg:fixed max-lg:min-h-screen  " src="/images/background.png" height={1200} width={700} alt="bg-image" />

      {children}
      {weather}
      {aqi}
      {wind}
      {temperature}
    </div>
  )
}
