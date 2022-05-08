import React, { useContext } from 'react'
import { SearchContext } from '../..'
import style from "./ErrorMessage.module.css"

const ErrorMessage = () => {
    
   let {error ,city,setCity ,setError , setDailyWeather} = useContext(SearchContext)
    
   if(error && !city){
setError("")
setCity("")
setDailyWeather("")
    return
   }


    return (
       <div className={style.errorMessage}>
        {error?<p> Search {error} no match for {city} </p>: null}
        </div>
    )
}

export default ErrorMessage