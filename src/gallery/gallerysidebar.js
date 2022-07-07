import React, { useEffect, useRef, useState} from "react";
import {useSelector, useDispatch, Provider} from "react-redux";
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { store } from "../store";
import { gallery } from "./gallerySlice";
import "animate.css";

const filmlist = ['Kodak portra400', 'Forma pan400', 'Kodak portra160', 'Kentmere p400', 'Kodak 500T', 'Ilford delta3200', 'Ilford delta400', 'Kodak E100', 'Kodak Ekar100']
const digitallist = [];


export function Extendfilm(){
    return(
        <ul>
            {filmlist.map((item)=>(
                <h1 className="animate__animated animate__slideInDown" onClick={()=>{store.dispatch(gallery.actions.getfilmspecify(item.split(' ')[1]));}}><li key={item}>{item}</li></h1>
            ))}
        </ul>
    )
}

export function Extenddigital(){
    return(
        <ul>
            {digitallist.map((item)=>(
                <h1 className="animate__animated animate__slideInDown"><li key={item}>{item}</li></h1>
            ))}
        </ul>
    )
}

export const gallerysidebarfilmSlice = createSlice({
    name: 'sidebarfilm',
    initialState: false,
    reducers:{
        toggle: (state)=>{
            if(state){
                return false
            }else{
                return true
            }
        }
    }
})

export const gallerysidebardigitalSlice = createSlice({
    name: 'sidebardigital',
    initialState: false,
    reducers:{
        toggle: (state)=>{
            if(state){
                return false
            }else{
                return true
            }
        }
    }
})