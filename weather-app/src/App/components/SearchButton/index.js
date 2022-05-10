import style from "./SearchButton.module.css"
import React from 'react'
import { SearchContext } from '../..'
import { useContext } from 'react'
const SearchButton = ({prop1 , apiCall}) => {
    
    const {city, setCity} = useContext(SearchContext)

    if(!city){

        return
    }else{
    let cityArray = city.split("")
    console.log(cityArray) 
   cityArray.forEach((element)=>{

 if(isNaN(element)=== false){

  setCity("")
  
 }
 })
    }
    
    return (
        <div className={style.wrapper}>
        {/*<FadeIn transitionDuration={700} delay={200}>*/}
        <button onClick={apiCall} type='submit'>{prop1}</button>  
         {/* </FadeIn>*/}
        </div>
    )
}

export default SearchButton