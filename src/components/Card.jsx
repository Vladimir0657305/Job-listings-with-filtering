import { useContext } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { filterContext } from '../App';
import './Card.scss';

export default function Card(items) {
    const { v4: uuidv4 } = require('uuid');
    const param = items.items;
    const { isFilterPress, setIsFilterPress } = useContext(filterContext);
    const { filterData, setFilterData } = useContext(filterContext);

    const onChangeFilterValue = (event) => {
        let temp = '';
        event.obj ? temp = event.obj : temp = event;
        if (filterData.includes(temp)) {
            setFilterData(prev => prev.filter(_id => _id != temp));
        }
        else {
            setFilterData(filterData => [...filterData, temp]);
        }
        setIsFilterPress(true);
    }

    return (
        <>
            <LayoutGroup>
                <motion.div key={uuidv4()} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={param.featured ? "card-body featured" : 'card-body'}>
                    <motion.div key={uuidv4()} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='card-body__left'>
                        <img src={param.logo} alt='logo' key={uuidv4()} />
                        <motion.div key={uuidv4()} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='left-block'>
                            <motion.div key={uuidv4()} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='left-first'>
                                <span>{param.company}</span>
                                <span className={param.new ? "" : 'hidden'}>{param.new ? "NEW" : ''}</span>
                                <span className={param.featured ? "featured" : 'hidden'}>{param.featured ? "FEATURED" : ''}</span>
                            </motion.div>
                            <motion.div key={uuidv4()} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='left-second'>
                                <span>{param.position}</span>
                            </motion.div>
                            <motion.div key={uuidv4()} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='left-third'>
                                <span>{param.postedAt}</span>
                                <span>&#x2022;</span>
                                <span>{param.contract}</span>
                                <span>&#x2022;</span>
                                <span>{param.location}</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={uuidv4()} className='card-body__right'>
                        <span> <button className={filterData.includes(param.role) ? 'buttonStyle selected' : 'buttonStyle'} onClick={() => onChangeFilterValue(param.role)} key={uuidv4()} >{param.role}</button> </span>
                        <span> <button className={filterData.includes(param.level) ? 'buttonStyle selected' : 'buttonStyle'} onClick={() => onChangeFilterValue(param.level)} key={uuidv4()} >{param.level}</button> </span>
                        {
                            param.languages.map((obj, i) => <span key={uuidv4()}> <button key={uuidv4()} className={filterData.includes(obj) ? 'buttonStyle selected' : 'buttonStyle'} onClick={() => onChangeFilterValue({ obj })}  >{obj}</button> </span>)
                        }
                        {
                            param.tools.map((obj, i) => <span key={uuidv4()}> <button key={uuidv4()} className={filterData.includes(obj) ? 'buttonStyle selected' : 'buttonStyle'} onClick={() => onChangeFilterValue({ obj })}  >{obj}</button> </span>)
                        }
                    </motion.div>
                </motion.div>
            </LayoutGroup>
        </>
    );
}