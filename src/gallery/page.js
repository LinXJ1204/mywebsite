import React, { useEffect, useRef, useState} from "react";
import {useSelector, useDispatch, Provider} from "react-redux";
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { store } from "../store";
import { moreinfoSlice } from "./moreinfoSlice";


export function Photolist(){
    const photolist = useSelector(()=> {return store.getState('photo').gallery});
    const pagecount = useSelector(()=>{return store.getState().pagecontroler});

    return(
        <div className="photolist">
           {
            photolist.filter(item=> (photolist.indexOf(item)>=((pagecount-1)*15))&&(photolist.indexOf(item)<pagecount*15)).map((item)=>(
                <div className="photo" key={item}>
                    <img  src={require(`../photo/${item}`)} />
                    <div className="photoinfo">
                        <a>{item.split('.')[0]}</a>
                        <div className="moreinfobutton" onClick={()=>{store.dispatch(moreinfoSlice.actions.moreopen(item))}}>More</div>
                    </div>
                </div>
                
            ))
           }
        </div>
    )
}

