import  style from "./Search.module.css"
import { useContext } from 'react'
import { SearchContext } from '../..'

const SearchBar = () => {


const {city, setCity} = useContext(SearchContext)

return (
        <div className={style.wrapper}>
        <label>Search</label>
          <input className={style.input} value={city} type={"text"} onChange={(e)=>setCity(e.target.value)} placeholder={"City or Town"}></input>  
        </div>
    )
}

export default SearchBar