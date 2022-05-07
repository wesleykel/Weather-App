import React from 'react'
import { useContext , useState ,useEffect } from 'react'
import { SearchContext } from '../..'
import DailyForecast from '../DailyForeCast'
const DailyResults = () => {
    

    let {result , dailyWeather} = useContext(SearchContext) 
    const [fourDays, setFourDays] = useState([])
    const [date ,setDate] = useState()
   
    
    const [weekday, setWeekday] =useState(["Sunday" ,"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"])
   

useEffect(()=>{
 setDate(new Date().getUTCDay())
        
 
 if(dailyWeather){
setFourDays(dailyWeather.splice(0,3))
                }
                 
    },[result])

    if(date === 6){
               
        setDate(0)
                   
               }
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