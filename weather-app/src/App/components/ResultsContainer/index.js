import style from "./MainResult.module.css"
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { SearchContext } from '../..'
import FadeIn from "react-fade-in"


const ResultsContainer = () => {
    const [temp, setTemp] =useState({})
    const [searchedCity, setSCity]=useState("")
    const{city ,setCity,result}=useContext(SearchContext) 
    const [upperCaseCity , setUpperCaseCity] = useState("")
 console.log(city)   


useEffect(()=>{

if(result.current){
   
    setSCity(city)
setTemp({
    
    temp:Math.floor(result.current.temp),
    feelsLike:Math.floor(result.current.feels_like),
    description:result.current.weather[0].description,
    icon:result.current.weather[0].icon
})   

 setCity("")

 if(city){
    const upperCaseCity = city.split("")
    
    setUpperCaseCity(upperCaseCity[0].toUpperCase()+city.substring(1))
    
    } 

}

},[result])



    return (
  <div>
 {searchedCity?<p className={style.result}>Search results for : {upperCaseCity}</p>: null}
 {searchedCity?<FadeIn transitionDuration={1500} delay={550}><ul className={style.wrapper}>
       <li id={style.temp}>Temperature: {temp.temp}°</li>
       <li id={style.feelsLike}>Feels Like: {temp.feelsLike}°</li>  
       <li id={style.description}>{temp.description} </li>  
{searchedCity?<div className={style.imgWrapper}>
<img src={`http://openweathermap.org/img/wn/${temp.icon}@2x.png`} alt="weather" />
        </div>:null}

       


       </ul></FadeIn> :null}


        </div>
    )
}

export default ResultsContainer