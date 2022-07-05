import React, { useEffect, useRef, useState} from "react";
import {useSelector, useDispatch, Provider} from "react-redux";
import { configureStore, createSlice } from '@reduxjs/toolkit';
import './gallery.css';
import { store } from "../store";
import { gallery, getfilm, getdigital } from "./gallerySlice";
import { gallerysidebarfilmSlice, gallerysidebardigitalSlice, Extendfilm, Extenddigital } from "./gallerysidebar";
import { Photolist } from "./page";
import {Pagecontroler} from "./pagecontroler";
import { pageSlice } from "./pageSlice";
import { Moreinfo } from "./moreinfo";
import { moreinfoSlice } from "./moreinfoSlice";
import "animate.css";
import "../animista.css"

const directicon = ['../photo/angle-small-right-free-icon-font.png', '../photo/angle-small-down-free-icon-font.png'];

const Gallerycomponent = () =>{
    const photolist = useSelector(()=> {return store.getState('photo').gallery});
    const digitaltoggle = useSelector(()=>{return store.getState()['gallerysidebardigital']});
    const filmtoggle = useSelector(()=>{return store.getState()['gallerysidebarfilm']});
    const moreinfo = useSelector(()=>{return store.getState()['moreinfo'].open});
    useEffect(()=>{store.dispatch(gallery.actions.getall)},[]);
    //test
    console.log(moreinfo);
    return(
        <div>
            <div className="galleryheader">
                <div className="galleryborder"></div>
            </div>
            
            <div className="gallerycontent">
                <div className="gallerysidebar">
                    <ul>
                        <li>
                            <a style={{cursor: 'pointer'}} onClick={()=>{
                                store.dispatch(gallery.actions.getall())
                                window.scrollTo({top: 0,behavior: 'smooth'});
                                store.dispatch(pageSlice.actions.firstpage());
                                }}>All</a>
                        </li>
                        <li>
                            <div className="sidebarchoice">
                                <a onClick={()=>{
                                    store.dispatch(gallery.actions.getdigital())
                                    window.scrollTo({top: 0,behavior: 'smooth'});
                                    store.dispatch(pageSlice.actions.firstpage());
                                    }}>Digital</a>
                                <button onClick={()=>(store.dispatch(gallerysidebardigitalSlice.actions.toggle()))}>{!digitaltoggle&&<img src={require('../photo/angle-small-right-free-icon-font.png')}></img>}{digitaltoggle&&<img src={require('../photo/angle-small-down-free-icon-font.png')}></img>}</button>
                            </div>
                            <ul className='childlist'>
                                {digitaltoggle&&<Extenddigital />}
                            </ul>
                        </li>
                        <li>
                            <div className="sidebarchoice">
                                <a onClick={()=>{
                                    store.dispatch(gallery.actions.getfilm())
                                    window.scrollTo({top: 0,behavior: 'smooth'});
                                    store.dispatch(pageSlice.actions.firstpage());
                                    }}>Film</a>
                                <button onClick={()=>(store.dispatch(gallerysidebarfilmSlice.actions.toggle()))}>{!filmtoggle&&<img src={require('../photo/angle-small-right-free-icon-font.png')}></img>}{filmtoggle&&<img src={require('../photo/angle-small-down-free-icon-font.png')}></img>}</button>
                            </div>
                            <ul className='childlist'>
                                {filmtoggle&&<Extendfilm />}
                            </ul>
                        </li>
                    </ul>
                </div>
                <div>
                    <Photolist />
                </div>
                
            </div>
            {moreinfo&&<Moreinfo />}
            <Pagecontroler className='pagecontoler'/>
        </div>
        
    )
}






export default Gallerycomponent;

