import React, { useEffect, useRef, useState} from "react";
import {useSelector, useDispatch, Provider} from "react-redux";
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { store } from "../store";


export function Photolist(){
    const photolist = useSelector(()=> {return store.getState('photo').gallery});
    const pagecount = useSelector(()=>{return store.getState().pagecontroler});

    return(
        <div className="photolist">
           {
            photolist.filter(item=> (photolist.indexOf(item)>=((pagecount-1)*15))&&(photolist.indexOf(item)<pagecount*15)).map((item)=>(
                <img key={item} src={require(`../photo/${item}`)} />
            ))
           }
        </div>
    )
}

