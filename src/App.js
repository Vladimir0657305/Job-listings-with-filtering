import Header from './components/Header';
import Main from './components/Main';
import Filter from './components/Filter';
import { createContext, useEffect, useState } from 'react';
import './App.css';


export var filterContext = createContext('');

function App() {
  const [isFilterPress, setIsFilterPress] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  let uniqArr =[];

  useEffect(() => {
    if(Array.from(new Set(filterData))) uniqArr = Array.from(new Set(filterData));
    setSelectedData( Array.from(new Set(filterData)));
    setIsFilterPress(false);
  }, [isFilterPress])
  

  return (
    <filterContext.Provider value={{ isFilterPress, setIsFilterPress, filterData, setFilterData, selectedData, setSelectedData } }>
      <div className="App">
        <Header />
        {
          selectedData.length > 0 ? <Filter /> : <Main />
        }
        
      </div>
    </filterContext.Provider>
  );
}

export default App;
