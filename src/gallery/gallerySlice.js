import React, { useEffect, useRef, useState} from "react";
import {useSelector, useDispatch, Provider} from "react-redux";
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { store } from "../store";

const galleryinitialstate = ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg',
'filmE100-1.jpg', 'filmE100-2.jpg','filmE100-3.jpg','filmE100-4.jpg','filmE100-5.jpg','filmE100-6.jpg','filmE100-7.jpg','filmE100-8.jpg',
'filmportra160-1.jpg','filmportra160-2.jpg','filmportra160-3.jpg','filmportra160-4.jpg','filmportra160-5.jpg','filmportra160-6.jpg',
'filmpan400-1.jpg','filmpan400-2.jpg','filmpan400-3.jpg','filmpan400-4.jpg','filmpan400-5.jpg','filmpan400-6.jpg',
'filmdelta400-1.jpg','filmdelta400-2.jpg','filmdelta400-3.jpg','filmdelta400-4.jpg','filmdelta400-5.jpg','filmdelta400-6.jpg','filmdelta400-7.jpg','filmdelta400-8.jpg','filmdelta400-9.jpg','filmdelta400-10.jpg',
'filmp400-2.jpg','filmp400-3.jpg','filmp400-4.jpg','filmp400-5.jpg','filmp400-6.jpg','filmp400-7.jpg','filmp400-8.jpg','filmp400-9.jpg','filmp400-10.jpg','filmp400-11.jpg','filmp400-12.jpg',
'film500T-1.jpg','film500T-2.jpg','film500T-3.jpg','film500T-4.jpg','film500T-5.jpg',
'filmportra400-1.jpg','filmportra400-2.jpg','filmportra400-3.jpg','filmportra400-4.jpg','filmportra400-5.jpg',
'filmdelta3200-1.jpg','filmdelta3200-2.jpg','filmdelta3200-3.jpg','filmdelta3200-4.jpg','filmdelta3200-5.jpg','filmdelta3200-6.jpg','filmdelta3200-7.jpg',
'filmEkar100-1.jpg','filmEkar100-2.jpg','filmEkar100-3.jpg','filmEkar100-4.jpg','filmEkar100-5.jpg','filmEkar100-6.jpg','filmEkar100-7.jpg',];



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
        },
        getfilmspecify: (state, actions)=>{
            return galleryinitialstate.filter(item=> item.includes(actions.payload));
        }
    }
})


