import { createRef, useContext, useEffect, useState } from 'react';
import { filterContext } from '../App';
import Card from "./Card";
// import Filter from './Filter';
import './Main.scss';
import dataArr from '../data.json';

export default function Main() {
    const { isFilterPress, setIsFilterPress } = useContext(filterContext);
    const { filterData, setFilterData } = useContext(filterContext);
    const { uniq, setUniq } = useContext(filterContext);
    const [selectedItem, setSelectedItem] = useState([]);

    useEffect(() => {
        // console.log(filterData);
        setUniq(Array.from(new Set(filterData)));
        // console.log(uniq);
        // uniq
        setIsFilterPress(false);
    }, [isFilterPress])

    const onClickButton = (event) => {
        
            console.log(event)
    }
            
    return(
        <>
            <div className="main-block" >
                {
                    dataArr.map((item, ind) => <Card key={ind} items={item} />)
                }
                
            </div>
            
        </>
    );
}