
import { useContext } from 'react'
import { SearchContext } from '../..'
//import { useEffect } from 'react'
const SearchBar = () => {


const {city, setCity} = useContext(SearchContext)

return (
        <div>
        <label>Search</label>
          <input value={city} type={"text"} onChange={(e)=>setCity(e.target.value)} placeholder={"City"}></input>  
        </div>
    )
}

export default SearchBar