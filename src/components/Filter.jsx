import { useContext, useState } from 'react';
import { filterContext } from '../App';
import dataArr from '../data.json';
import Card from './Card';
import './Filter.scss';

export default function Filter() {
    const { uniq, setUniq } = useContext(filterContext);
    const [selectedItem, setSelectedItem] = useState([]);
    let selectedId = [];
    const svg = <svg height="16 " viewBox="0 0 200 200" width="16" >
        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
    </svg>

    // for(let i = 0; i < dataArr.length; i++) {
    //     let temp = Object.values(dataArr[i]);
    //     let out = temp.flat(2);
    //     for (let j = 0; j < uniq.length; j++){
    //         if (out.includes(uniq[j])) selectedId.push(i);
    //     }
    // }
    for (const key of Object.keys(dataArr)) {
        // console.log(dataArr[key].company);
        let temp = [];
        temp = [...temp, dataArr[key].id, dataArr[key].languages, dataArr[key].level, dataArr[key].role, dataArr[key].tools];
        let out = temp.flat(2);
        for (let j = 0; j < uniq.length; j++) {
            if (out.includes(uniq[j])) selectedId.push(dataArr[key].id);
        }
    }

    let newDataArr = dataArr.filter(obj => { return selectedId.includes(obj.id) })

    const onClickButtonFilter = () => {

    }
    
    console.log('uniq===',uniq);

    return (
        <>
            
            <div className='card-body filter-block'>
                {
                    uniq.map(item => <span key={item + 10}> <button onClick={onClickButtonFilter} className='buttonStyleFilter' key={item}>{item} {svg}</button> </span>)
                }
            </div>
                {
                    newDataArr.map((item, ind) => <Card key={ind} items={item} />)
                }

            {/* {
                newDataArr.map((_, ind) =>
                    <div className={newDataArr[ind].featured ? "card-body featured" : 'card-body'}>
                        <div className='card-body__left'>
                            <img src={newDataArr[ind].logo} alt='logo' key={newDataArr[ind].logo} />
                            <div className='left-block'>
                                <div className='left-first'>
                                    <span key={newDataArr[ind].company}>{newDataArr[ind].company}</span>
                                    <span className={newDataArr[ind].new ? "" : 'hidden'} key={ind}>{newDataArr[ind].new ? "NEW" : ''}</span>
                                    <span className={newDataArr[ind].featured ? "featured" : 'hidden'} key={ind + 10}>{newDataArr[ind].featured ? "FEATURED" : ''}</span>
                                </div>
                                <div className='left-second'>
                                    <span key={newDataArr[ind].position}>{newDataArr[ind].position}</span>
                                </div>
                                <div className='left-third'>
                                    <span key={newDataArr[ind].postedAt}>{newDataArr[ind].postedAt}</span>
                                    <span key={'&#x2022'}>&#x2022;</span>
                                    <span key={newDataArr[ind].contract}>{newDataArr[ind].contract}</span>
                                    <span key={20224}>&#x2022;</span>
                                    <span key={newDataArr[ind].location}>{newDataArr[ind].location}</span>
                                </div>
                            </div>

                        </div>

                        <div className='card-body__right'>
                            <span key={newDataArr[ind].id}>{newDataArr[ind].id}</span>
                            <span key={newDataArr[ind].role}> <button className='buttonStyle' data-key={newDataArr[ind].id} data-role={newDataArr[ind].role}    >{newDataArr[ind].role}</button> </span>
                            <span key={newDataArr[ind].level}> <button className='buttonStyle' data-key={newDataArr[ind].id} data-level={newDataArr[ind].level}   >{newDataArr[ind].level}</button> </span>
                            {
                                newDataArr[ind].languages.map((obj, i) => <span key={obj + i}> <button key={i} data-key={obj.id} className='buttonStyle' data-languages={obj}   >{obj}</button> </span>)
                            }
                            {
                                newDataArr[ind].tools.map((obj, i) => <span key={obj + i}> <button key={i} data-key={obj.id} className='buttonStyle' data-tools={obj}   >{obj}</button> </span>)
                            }
                        </div>
                    </div>
                )
            } */}
        </>
    );
}