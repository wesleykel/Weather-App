import { useState } from 'react';
import { createContext } from 'react';
import Title from './components/Title';
import './App.css';
import SearchBar from './components/SearchBar';
//import SearchButton from './components/SearchButton';
import ApiCall from './components/ApiCall';
import ResultsContainer from './components/ResultsContainer';


export const SearchContext = createContext()



function App() {
const [city ,setCity] =useState("London")
const [result, setResult] = useState({})
  return (
 
    <div className="App">
  <SearchContext.Provider value={{city,setCity ,result, setResult}}>

 <Title/>
 <div className="Search">
<SearchBar/>
<ApiCall/>
</div>
<ResultsContainer/>
  
 </SearchContext.Provider>
    </div>

  );
}

export default App;
