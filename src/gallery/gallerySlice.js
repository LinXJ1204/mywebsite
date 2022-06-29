import React, { useEffect, useRef, useState} from "react";
import {useSelector, useDispatch, Provider} from "react-redux";
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { store } from "../store";

const galleryinitialstate = ['01.jpg','01.jpg','01.jpg','01.jpg','01.jpg','01.jpg','01.jpg','01.jpg','01.jpg','01.jpg','01.jpg'];



export const galleryreducer = (state=galleryinitialstate, action) =>{
    switch(action.type){
        case 'getfilm':
            return state.photo.filter(item=> item.includes('film')===false);

        case 'getdigital':
            return state.photo.filter(item=> item.includes('film')===false);
    }
};

export const gallery = createSlice({
    name:'gallery',
    initialState: galleryinitialstate,
    reducers: {
        getfilm: (state) =>{
            return galleryinitialstate.filter(item=> item.includes('film'));
        },
        getdigital: (state) =>{
            return galleryinitialstate.filter(item=> !item.includes('film'));
        },
        getall: (state) =>{
            return galleryinitialstate;
        }
    }
})

export const getfilm = () =>{
    return {type:'getfilm'}
}

export const getdigital = () =>{
    return {type:'getdigital'}
}

const Gallerycomponent = () =>{
    return(
        <div></div>
    )
}
