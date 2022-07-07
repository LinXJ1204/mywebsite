import {EXIF} from 'exif-js';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { store } from '../store';
import { moreinfoSlice } from './moreinfoSlice';

export function Moreinfo(){
    const photodisplay = useSelector(()=>{return store.getState()['moreinfo'].photo});

    return(
        <div>
            <div className="infobackground slide-in-fwd-tr"></div>
                <div className="morephotoinfo slide-in-fwd-tr">
                    <img className='infophoto slide-in-fwd-tr' src={require(`../photo/${photodisplay}`)}></img>
                    <div className="infotext slide-in-fwd-tr">
                        <ul>
                            <li><h1>{photodisplay.split('.')[0]}</h1></li>
                            
                        </ul>
                    </div>
                    <div className="closedinfo" onClick={()=>{store.dispatch(moreinfoSlice.actions.closed())}}><img src={require('../photo/cross-free-icon-font.png')}></img></div>
                </div>
        </div>
  
    )
}



