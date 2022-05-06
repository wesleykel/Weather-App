import style from "./MainResult.module.css"
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { SearchContext } from '../..'

const ResultsContainer = () => {
    const [temp, setTemp] =useState({})
    const [searchedCity, setSCity]=useState("")
    const{city ,setCity,result}=useContext(SearchContext) 

 console.log(city)   
//console.log(result.current.temp)

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

}





},[result])

  
    
console.log(searchedCity)
    
    return (
  <div>
 {searchedCity?<p className={style.result}>Search results for :{searchedCity}</p>: null}
 {searchedCity? <ul className={style.wrapper}>
       <li>Temperature: {temp.temp}°c</li>
       <li>Feels Like:{temp.feelsLike}°c</li>  
       <li>Description: {temp.description} </li>  
{searchedCity?<div className={style.imgWrapper}>
       <img src={`http://openweathermap.org/img/wn/${temp.icon}@2x.png`} alt="weather" />
        </div>:null}

       


       </ul>:null}


        </div>
    )
}

export default ResultsContainer