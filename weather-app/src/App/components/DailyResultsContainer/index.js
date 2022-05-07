import React from 'react'
import { useContext , useState ,useEffect } from 'react'
import { SearchContext } from '../..'
import DailyForecast from '../DailyForeCast'
const DailyResults = () => {
    //const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let {city ,result , dailyWeather, setDailyWeather} = useContext(SearchContext) 
    const [fourDays, setFourDays] = useState([])
    const [date ,setDate] = useState()
   
    
    const weekday =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    //console.log(dailyWeather)

    useEffect(()=>{

        if(dailyWeather){
            setFourDays(dailyWeather.splice(0,3))
             setDate( new Date().getUTCDay())
               
             if(date === 6){
               setDate(0)
               
           }
     
                }
                 


    },[dailyWeather])
    console.log(fourDays)
  console.log(weekday[date])
    return (
        <div>
        {fourDays.map((day ,i=0)=>{
             return   <DailyForecast picture={day.weather[0].icon} day={weekday[date+i]} temp={`High: ${Math.floor(day.temp.day)} °c`} low={`Low: ${Math.floor(day.temp.min)} °c`} descrip={day.weather[0].description}/>   
        })}
    
    
        </div>
    )
}

export default DailyResults