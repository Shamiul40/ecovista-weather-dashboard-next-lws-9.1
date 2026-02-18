import "../globals.css";

export default function layout({children, aqi, weather, temperature,wind}) {
  return (
    <div >
      
      {children}
      {weather}
      {aqi}
      {wind}
      {temperature}
    </div>
  )
}
