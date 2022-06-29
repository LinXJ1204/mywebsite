import React, { useEffect, useRef, useState} from "react";
import {useSelector, useDispatch, Provider} from "react-redux";
import { configureStore, createSlice } from '@reduxjs/toolkit'
import './gallery.css';
import { store } from "../store";
import { gallery, getfilm, getdigital } from "./gallerySlice";
import { gallerysidebarfilmSlice, gallerysidebardigitalSlice, Extendfilm } from "./gallerysidebar";


function filmhandler(){
    store.dispatch(gallery.actions.getfilm());
    store.dispatch(gallerysidebarfilmSlice.actions.toggle());
}

function digitalhandler(){
    store.dispatch(gallery.actions.getdigital());
    store.dispatch(gallerysidebardigitalSlice.actions.toggle());
    console.log(store.getState()['gallerysidebardigital'])
}


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
                            <a onClick={()=>(store.dispatch(gallery.actions.getall()))}>All</a>
                        </li>
                        <li>
                            <a onClick={digitalhandler}>Digital</a>
                            <ul>
                                {digitaltoggle&&<Extendfilm />}
                            </ul>
                        </li>
                        <li>
                            <a onClick={filmhandler}>Film</a>
                            <ul>
                                {filmtoggle&&<Extendfilm />}
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="photolist">
                    {photolist.map((item)=>(
                        <img src={require(`../photo/${item}`)} />
                    ))}
                </div>
                
            </div>
        </div>
        
    )
}






export default Gallerycomponent;

