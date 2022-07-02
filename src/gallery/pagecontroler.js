import React, { useEffect, useRef, useState} from "react";
import {useSelector, useDispatch, Provider} from "react-redux";
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { store } from "../store";
import {pageSlice} from './pageSlice';



export function Pagecontroler(){
    const pagecount = useSelector(()=>{return store.getState().pagecontroler});
    const prepage = useSelector(()=>{
        if(store.getState().pagecontroler>1) {
            return store.getState().pagecontroler-1}else{return null}});
    
    const lastpage = useSelector(()=>{return Math.ceil(store.getState().gallery.length/15) })
    const nextpage = useSelector(()=>{
        if(store.getState().pagecontroler < Math.ceil(store.getState().gallery.length/15)){
            return store.getState().pagecontroler+1;
        }else{
            return null;
        }
    })

    return(
        <div className="pagecontroler">
            <div className="page" onClick={()=>{
                window.scrollTo({top: 0,behavior: 'smooth'});
                store.dispatch(pageSlice.actions.firstpage());
                }}><img src={require('../photo/angle-double-left.png')} /></div>
            <div className="page" style={{opacity:'40%'}} onClick={()=>{
                store.dispatch(pageSlice.actions.previouspage())
                window.scrollTo({top: 0,behavior: 'smooth'});
                }}>{prepage}</div>
            <div className="page">{pagecount}</div>
            <div className="page" style={{opacity:'40%'}} onClick={()=>{
                store.dispatch(pageSlice.actions.nextpage(lastpage))
                window.scrollTo({top: 0,behavior: 'smooth'});
                }}>{nextpage}</div>
            <div className="page" onClick={()=>{
                store.dispatch(pageSlice.actions.lastpage(lastpage))
                window.scrollTo({top: 0,behavior: 'smooth'});
                }}><img src={require('../photo/angle-double-right.png')} /></div>
        </div>
    )
}