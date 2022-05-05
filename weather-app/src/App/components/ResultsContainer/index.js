import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { SearchContext } from '../..'

const ResultsContainer = () => {
    const [temp, setTemp] =useState({})
    const [searchedCity, setSCity]=useState("")
    const [bool , setBool] = useState(true)
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

  
    

    
    return (
        <div>
<p>Search results for :{searchedCity}</p> 
        <ul>
       <li>Temperature: {temp.temp}°c</li>
       <li>Feels Like:{temp.feelsLike}°c</li>  
       <li>Description: {temp.description} </li>  


       <img src={`http://openweathermap.org/img/wn/${temp.icon}@2x.png`} alt="weather" />


       </ul>
        </div>
    )
}

export default ResultsContainer