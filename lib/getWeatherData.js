


export const getAirPollutionWeatherData =async(lat, lon)=>{
    const response =await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid=${env.pro}`) 
}