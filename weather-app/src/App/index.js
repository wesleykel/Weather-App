import { useState } from 'react';
import { createContext } from 'react';
import './App.css';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import ApiCall from './components/ApiCall';
import ResultsContainer from './components/ResultsContainer';
import DailyResults from './components/DailyResultsContainer';
import ErrorMessage from './components/ErrorMessage';


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

{error?<ErrorMessage/>:null}
{error?null:<ResultsContainer/>}
{error?null:<DailyResults/>}
 
 </SearchContext.Provider>
    </div>

  );
}

export default App;
