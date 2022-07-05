import {EXIF} from 'exif-js';
import { useSelector } from 'react-redux';
import { store } from '../store';
import { moreinfoSlice } from './moreinfoSlice';

export function Moreinfo(){
    const photodisplay = useSelector(()=>{return store.getState()['moreinfo'].photo});
    return(
        <div>
            <div className="infobackground"></div>
                <div className="morephotoinfo">
                    <img className='infophoto' src={require(`../photo/${photodisplay}`)}></img>
                    <div className="infotext">
                        <ul>
                            <li>FocalLength:</li>
                            <li>FNumber:</li>
                            <li>ShutterSpeedValue:</li>
                            <li>ISO:</li>
                        </ul>
                    </div>
                    <div className="closedinfo" onClick={()=>{store.dispatch(moreinfoSlice.actions.closed())}}><img src={require('../photo/cross-free-icon-font.png')}></img></div>
                </div>
        </div>
  
    )
}



