import React, { useEffect } from 'react'
import { useContext ,useState } from 'react'
import { SearchContext } from '../..'
import SearchButton from '../SearchButton'
const ApiCall = () => {
const WEATHER_API=process.env.REACT_APP_API_KEY 

let {city ,result ,setResult ,setError,error, dailyWeather, setDailyWeather} = useContext(SearchContext) 

const [longAndLat , setLongAndLat] = useState({})
 
const getLongAndLat =()=>{
 
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${WEATHER_API}`)
    .then(response => response.json())
      .then(data => setLongAndLat({lat:data[0].lat ,lon:data[0].lon }))
      .catch(error => setError("Errors",error))
 } 
console.log(error)
const  getWeather =()=>{

fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${longAndLat.lat}&lon=${longAndLat.lon}&units=metric&exclude={}&appid=${WEATHER_API}`)
.then(response => response.json())
.then(data => setResult(data))
.then(error => console.error(error))
}
 

console.log(dailyWeather)

 useEffect(()=>{

getLongAndLat()


 },[])
 useEffect(()=>{

getWeather()
setDailyWeather(result.daily)
setError("")
 },[longAndLat])


// console.log(longAndLat.lat)
   
    return (
        <div>
      <SearchButton prop1={"Submit"}  apiCall={getLongAndLat}/>
        </div>
    )
}

export default ApiCall