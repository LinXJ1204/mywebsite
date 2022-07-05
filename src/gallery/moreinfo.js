import {EXIF} from 'exif-js';
import { useSelector } from 'react-redux';
import { store } from '../store';
import { moreinfoSlice } from './moreinfoSlice';

export function Moreinfo(){
    const photodisplay = useSelector(()=>{return store.getState()['moreinfo'].photo});
    return(
        <div>
            <div className="infobackground tilt-in-fwd-tr"></div>
                <div className="morephotoinfo tilt-in-fwd-tr">
                    <img className='infophoto tilt-in-fwd-tr' src={require(`../photo/${photodisplay}`)}></img>
                    <div className="infotext tilt-in-fwd-tr">
                        <ul>
                            <li><h1>{photodisplay.split('.')[0]}</h1></li>
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



