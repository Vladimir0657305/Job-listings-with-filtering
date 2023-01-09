import Header from './components/Header';
import Main from './components/Main';
import Filter from './components/Filter';
import { createContext, useEffect, useState } from 'react';
import { motion, LayoutGroup} from 'framer-motion';
import './App.css';


export var filterContext = createContext('');

function App() {
  const { v4: uuidv4 } = require('uuid');
  const [isFilterPress, setIsFilterPress] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [updateFilterButton, setUpdateFilterButton] = useState('');
  let uniqArr = [];

  useEffect(() => {

    if (selectedData.includes(updateFilterButton)) {
      setSelectedData(prev => prev.filter(_id => _id != updateFilterButton));
      setFilterData(prev => prev.filter(_id => _id != updateFilterButton));
    }
    else {
      if (Array.from(new Set(filterData))) uniqArr = Array.from(new Set(filterData));
      setSelectedData(Array.from(new Set(filterData)));
    }

    setIsFilterPress(false);
    setUpdateFilterButton('');
  }, [isFilterPress, updateFilterButton])


  return (
    <filterContext.Provider value={{ isFilterPress, setIsFilterPress, filterData, setFilterData, selectedData, setSelectedData, updateFilterButton, setUpdateFilterButton }}>
      
        <div key={uuidv4()} className="App" >
          <Header />
          {
            selectedData.length > 0 ? <Filter /> : <Main />
          }

        </div>
      
    </filterContext.Provider>
  );
}

export default App;
