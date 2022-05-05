import React, { useEffect } from 'react'
import { useContext ,useState } from 'react'
import { SearchContext } from '../..'
import SearchButton from '../SearchButton'
const ApiCall = () => {
const WEATHER_API=process.env.REACT_APP_API_KEY 
let {city ,result, setResult} = useContext(SearchContext) 

const [longAndLat , setLongAndLat] = useState({})
 
const getLongAndLat =()=>{
 
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${WEATHER_API}`)
    .then(response => response.json())
      .then(data => setLongAndLat({lat:data[0].lat ,lon:data[0].lon }));

 } 

const  getWeather =()=>{

fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${longAndLat.lat}&lon=${longAndLat.lon}&exclude={part}&appid=${WEATHER_API}`)
.then(response => response.json())
.then(data => setResult(data));

}
 
console.log(result)


 useEffect(()=>{

getLongAndLat()


 },[])
 useEffect(()=>{

getWeather()

 },[longAndLat])


 console.log(longAndLat.lat)
   
    return (
        <div>
      <SearchButton prop1={"Submit"}  apiCall={getLongAndLat}/>
        </div>
    )
}

export default ApiCall