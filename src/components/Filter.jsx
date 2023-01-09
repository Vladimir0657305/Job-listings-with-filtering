import { useContext } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { filterContext } from '../App';
import dataArr from '../data.json';
import Card from './Card';
import './Filter.scss';

export default function Filter() {
    const { v4: uuidv4 } = require('uuid');
    const { selectedData, setSelectedData } = useContext(filterContext);
    const { updateFilterButton, setUpdateFilterButton } = useContext(filterContext);
    let selected = [];
    const svg = <svg height="16 " viewBox="0 0 200 200" width="16" >
        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
    </svg>

    for (const key of Object.keys(dataArr)) {
        let temp = [];
        temp = [...temp, dataArr[key].id, dataArr[key].languages, dataArr[key].level, dataArr[key].role, dataArr[key].tools];
        let out = temp.flat(2);
        for (let j = 0; j < selectedData.length; j++) {
            if (out.includes(selectedData[j])) selected.push(dataArr[key].id);
        }
    }

    let newDataArr = dataArr.filter(obj => { return selected.includes(obj.id) })

    const onClickButtonFilter = (item) => {
        setUpdateFilterButton(prev => item);
    }


    return (
        <>
            <LayoutGroup>
                <div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={uuidv4()} className='card-body filter-block'>
                    {
                        selectedData.map((item, ind) => <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={uuidv4()}> <button onClick={() => onClickButtonFilter(item)} className='buttonStyleFilter' key={item}>{item} {svg}</button> </motion.span>)
                    }
                </div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={uuidv4()} >
                    {
                        newDataArr.map((item, ind) => <Card key={uuidv4()} items={item} />)
                    }
                </motion.div>
            </LayoutGroup>
        </>
    );
}