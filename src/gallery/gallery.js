import React, { useEffect, useRef, useState} from "react";
import {useSelector, useDispatch, Provider} from "react-redux";
import { configureStore, createSlice } from '@reduxjs/toolkit'
import './gallery.css';
import { store } from "../store";
import { gallery, getfilm, getdigital } from "./gallerySlice";


const Gallerycomponent = () =>{
    const photolist = useSelector(()=> {return store.getState('photo').gallery});
    console.log(gallery.actions)
    useEffect(()=>{store.dispatch(gallery.actions.getall)});
    return(
        <div>
            <div className="galleryheader">
                <div className="galleryborder">
                    <button onClick={()=>(
                        store.dispatch(gallery.actions.getfilm())
                        )}>Film</button>
                    <button>Digital</button>
                </div>
            </div>
            
            <div className="gallerycontent">
                <div className="gallerysidebar">
                    <ul>
                        <li><a onClick={()=>(
                        store.dispatch(gallery.actions.getall())
                        )}>All</a></li>
                        <li><a onClick={()=>(
                        store.dispatch(gallery.actions.getdigital())
                        )}>Digital</a></li>
                        <li><a onClick={()=>(
                        store.dispatch(gallery.actions.getfilm())
                        )}>Film</a></li>
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

