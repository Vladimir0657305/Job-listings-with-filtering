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

  console.log('AAAPPPPPP+++', isFilterPress, 'filterData===', filterData, 'selectedData==', selectedData);
  // console.log(selectedId);
  // console.log(isFilterPress);
  useEffect(() => {
    console.log(isFilterPress);
    // let uniqArr = Array.from(new Set(filterData));
    if(Array.from(new Set(filterData))) uniqArr = Array.from(new Set(filterData));
    console.log('uniqArr==', uniqArr);
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
