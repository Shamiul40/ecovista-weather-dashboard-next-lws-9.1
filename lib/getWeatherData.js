


export const getAirPollutionWeatherData =async(lat, lon)=>{
    
   try {
     const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`)

    const data = await response.json();

    return data
   } catch (e){
    console.log(e.message)
   }
}


