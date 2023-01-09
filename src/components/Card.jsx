import { createRef, useContext, useEffect, useState } from 'react';
import { filterContext } from '../App';
import './Card.scss';

// export default function Card({ id, company, logo, new, status, featured, position, role, level, postedAt, contract, location, languages, tools }) {
export default function Card(items) {
    const { v4: uuidv4 } = require('uuid');
    const param = items.items;
    const { isFilterPress, setIsFilterPress } = useContext(filterContext);
    const { filterData, setFilterData } = useContext(filterContext);
    const { selectedData, setSelectedData } = useContext(filterContext);

    const onChangeFilterValue = (event) => {
        let temp = '';
        event.obj ? temp = event.obj : temp = event;
        if (filterData.includes(temp)) {
            setFilterData(prev => prev.filter(_id => _id != temp));
            console.log(filterData);
        }
        else {
            setFilterData(filterData => [...filterData, temp]);
        }
        setIsFilterPress(true);
    }

    return (
        <>
            <div className={param.featured ? "card-body featured" : 'card-body'}>
                <div className='card-body__left'>
                    <img src={param.logo} alt='logo' key={uuidv4()} />
                    <div className='left-block'>
                        <div className='left-first'>
                            <span>{param.company}</span>
                            <span className={param.new ? "" : 'hidden'}>{param.new ? "NEW" : ''}</span>
                            <span className={param.featured ? "featured" : 'hidden'}>{param.featured ? "FEATURED" : ''}</span>
                        </div>
                        <div className='left-second'>
                            <span>{param.position}</span>
                        </div>
                        <div className='left-third'>
                            <span>{param.postedAt}</span>
                            <span>&#x2022;</span>
                            <span>{param.contract}</span>
                            <span>&#x2022;</span>
                            <span>{param.location}</span>
                        </div>
                    </div>

                </div>

                <div className='card-body__right'>
                    <span> <button className='buttonStyle' data-key={param.id} data-role={param.role} onClick={() => onChangeFilterValue(param.role)} key={uuidv4()} >{param.role}</button> </span>
                    <span> <button className='buttonStyle' data-key={param.id} data-level={param.level} onClick={() => onChangeFilterValue(param.level)} key={uuidv4()} >{param.level}</button> </span>
                    {
                        param.languages.map((obj, i) => <span key={obj + i}> <button key={uuidv4()} data-key={obj.id} className='buttonStyle' data-languages={obj} onClick={() => onChangeFilterValue({ obj })}  >{obj}</button> </span>)
                    }
                    {
                        param.tools.map((obj, i) => <span key={obj + i}> <button key={uuidv4()} data-key={obj.id} className='buttonStyle' data-tools={obj} onClick={() => onChangeFilterValue({ obj })}  >{obj}</button> </span>)
                    }
                </div>
            </div>
        </>
    );
}