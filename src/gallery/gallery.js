import React, { useEffect, useRef, useState} from "react";
import {useSelector, useDispatch, Provider} from "react-redux";
import { configureStore, createSlice } from '@reduxjs/toolkit'
import './gallery.css';
import { store } from "../store";
import { gallery, getfilm, getdigital } from "./gallerySlice";
import { gallerysidebarfilmSlice, gallerysidebardigitalSlice, Extendfilm } from "./gallerysidebar";
import "animate.css";

const directicon = ['../photo/angle-small-right-free-icon-font.png', '../photo/angle-small-down-free-icon-font.png'];

const Gallerycomponent = () =>{
    const photolist = useSelector(()=> {return store.getState('photo').gallery});
    const digitaltoggle = useSelector(()=>{return store.getState()['gallerysidebardigital']});
    const filmtoggle = useSelector(()=>{return store.getState()['gallerysidebarfilm']});
    useEffect(()=>{store.dispatch(gallery.actions.getall)},[]);
    return(
        <div>
            <div className="galleryheader">
                <div className="galleryborder">
                    
                </div>
            </div>
            
            <div className="gallerycontent">
                <div className="gallerysidebar">
                    <ul>
                        <li>
                            <a style={{cursor: 'pointer'}} onClick={()=>(store.dispatch(gallery.actions.getall()))}>All</a>
                        </li>
                        <li>
                            <div className="sidebarchoice">
                                <a onClick={()=>(store.dispatch(gallery.actions.getdigital()))}>Digital</a>
                                <button onClick={()=>(store.dispatch(gallerysidebardigitalSlice.actions.toggle()))}>{!digitaltoggle&&<img src={require('../photo/angle-small-right-free-icon-font.png')}></img>}{digitaltoggle&&<img src={require('../photo/angle-small-down-free-icon-font.png')}></img>}</button>
                            </div>
                            <ul className='childlist'>
                                {digitaltoggle&&<Extendfilm />}
                            </ul>
                        </li>
                        <li>
                            <div className="sidebarchoice">
                                <a onClick={()=>(store.dispatch(gallery.actions.getfilm()))}>Film</a>
                                <button onClick={()=>(store.dispatch(gallerysidebarfilmSlice.actions.toggle()))}>{!filmtoggle&&<img src={require('../photo/angle-small-right-free-icon-font.png')}></img>}{filmtoggle&&<img src={require('../photo/angle-small-down-free-icon-font.png')}></img>}</button>
                            </div>
                            <ul className='childlist'>
                                {filmtoggle&&<Extendfilm />}
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="photolist">
                    {photolist.map((item)=>(
                        <img key={item} src={require(`../photo/${item}`)} />
                    ))}
                </div>
                
            </div>
        </div>
        
    )
}






export default Gallerycomponent;

