import React, { useEffect, useRef, useState} from "react";
import {useSelector, useDispatch, Provider} from "react-redux";
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { store } from "../store";

const filmlist = ['Kodak portra400', 'Forma pan400', 'Kodak portra160', 'Kentmere400', 'Kodak 500T', 'Ilford delta3200', 'Ilford delta400', 'Kodak E100', 'Kodak Ekar100']



export function Extendfilm(){
    return(
        <ul>
            {filmlist.map((item)=>(
                <li className='childlist' key={item}>{item}</li>
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