import { useContext } from 'react';
import { filterContext } from '../App';
import dataArr from '../data.json';
import './Filter.scss';

export default function Filter() {
    const { uniq, setUniq } = useContext(filterContext);
    const svg = <svg height="16 " viewBox="0 0 200 200" width="16" >
        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
    </svg>
    // let t = Object.values(dataArr).filter(item => item.includes(uniq));
    // console.log(t);
    console.log(Object.values(dataArr));
    return (
        <>
            <div className='card-body filter-block'>
                {
                    uniq.map(item => <span key={item + 1}> <button className='buttonStyleFilter' key={item}>{item} {svg}</button> </span>)
                }
            </div>


            {
                // dataArr.map(() => 
                // <div className={param.featured ? "card-body featured" : 'card-body'}>
                //     <div className='card-body__left'>
                //         <img src={param.logo} alt='logo' />
                //         <div className='left-block'>
                //             <div className='left-first'>
                //                 <span>{param.company}</span>
                //                 <span className={param.new ? "" : 'hidden'}>{param.new ? "NEW" : ''}</span>
                //                 <span className={param.featured ? "featured" : 'hidden'}>{param.featured ? "FEATURED" : ''}</span>
                //             </div>
                //             <div className='left-second'>
                //                 <span>{param.position}</span>
                //             </div>
                //             <div className='left-third'>
                //                 <span>{param.postedAt}</span>
                //                 <span>&#x2022;</span>
                //                 <span>{param.contract}</span>
                //                 <span>&#x2022;</span>
                //                 <span>{param.location}</span>
                //             </div>
                //         </div>

                //     </div>

                //     <div className='card-body__right'>
                //         <span> <button className='buttonStyle' data-key={param.id} data-role={param.role} onClick={() => onClickButton(param.role)}   >{param.role}</button> </span>
                //         <span> <button className='buttonStyle' data-key={param.id} data-level={param.level} onClick={() => onClickButton(param.level)}  >{param.level}</button> </span>
                //         {
                //             param.languages.map((obj, i) => <span key={obj + i}> <button key={i} data-key={obj.id} className='buttonStyle' data-languages={obj} onClick={() => onClickButton({ obj })}  >{obj}</button> </span>)
                //         }
                //         {
                //             param.tools.map((obj, i) => <span key={obj + i}> <button key={i} data-key={obj.id} className='buttonStyle' data-tools={obj} onClick={() => onClickButton({ obj })}  >{obj}</button> </span>)
                //         }
                //     </div>
                // </div>
                // )
            }
        </>
    );
}