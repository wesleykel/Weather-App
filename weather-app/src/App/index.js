import { useState } from 'react';
import { createContext } from 'react';
import Title from './components/Title';
import './App.css';
import SearchBar from './components/SearchBar';
//import SearchButton from './components/SearchButton';
import ApiCall from './components/ApiCall';
import ResultsContainer from './components/ResultsContainer';
import DailyResults from './components/DailyResultsContainer';


export const SearchContext = createContext()



function App() {
const [city ,setCity] =useState("London")
const [result, setResult] = useState({})
const[error, setError] =useState("")
const [dailyWeather, setDailyWeather]= useState([])
  return (
 
    <div className="App">
  <SearchContext.Provider value={{city,setCity ,result, setResult, error, setError ,dailyWeather, setDailyWeather}}>

 <Title/>
 <div className="Search">
<SearchBar/>
<ApiCall/>
</div>
<ResultsContainer/>
<DailyResults/>
  
 </SearchContext.Provider>
    </div>

  );
}

export default App;
