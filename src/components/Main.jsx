import { createRef, useContext, useEffect, useState } from 'react';
import { filterContext } from '../App';
import Card from "./Card";
// import Filter from './Filter';
import './Main.scss';
import dataArr from '../data.json';

export default function Main() {
    const { isFilterPress, setIsFilterPress } = useContext(filterContext);
    const { filterData, setFilterData } = useContext(filterContext);
    const { selectedData, setSelectedData } = useContext(filterContext);
    
    // console.log('MAIN!!!!!!!!!!!!!!!!!', isFilterPress, 'filterData=====',filterData);

    // useEffect(() => {
    //     console.log('MAIN-USEEFFECT-filterData==', filterData, 'isFilterPress==', isFilterPress);
    //     // console.log(Array.from(new Set(filterData)).length);
    //     let uniqArr = Array.from(new Set(filterData));
    //     // uniqArr.length ? setSelectedId(uniqArr) : null;
    //     // if (uniqArr.length) setSelectedId(uniqArr)
    //     // setSelectedId(prev => [...prev, uniqArr]);
    //     console.log('WORK')
    //     setSelectedData( uniqArr);
    //     console.log('MAIN-USEEFFECT-selectedData==', selectedData);
    //     // uniq
    //     setIsFilterPress(false);
    // }, [isFilterPress, filterData]);

    // const onClickButton = (event) => {
        
    //         console.log(event)
    // }
            
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