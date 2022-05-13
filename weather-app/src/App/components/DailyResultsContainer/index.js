import React from 'react'
import style from "./DailyResults.module.css"
import { useContext , useState ,useEffect } from 'react'
import { SearchContext } from '../..'
import DailyForecast from '../DailyForeCast'
const DailyResults = () => {
    

    let {result , dailyWeather} = useContext(SearchContext) 
    const [fourDays, setFourDays] = useState([])
 const[date ,setDate] = useState()
    const [weekday, ] =useState(["Sunday" ,"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday" ,"Monday"])
   

useEffect(()=>{
 setDate(new Date().getUTCDay()+1)
        
 
 if(dailyWeather){
setFourDays(dailyWeather.splice(0,3))
                }
                 
    },[result])




 if(date === 5){
               
        setDate(0)
 }
     
    

    return (
        <div className={style.wrapper}>
        {fourDays.map((day ,i=0)=>{

        
            
            
             return   <DailyForecast  key={i} picture={day.weather[0].icon} day={weekday[date+i]} temp={day.temp.day} low={day.temp.min} />   
        })}
    
    
        </div>
    )
}

export default DailyResults