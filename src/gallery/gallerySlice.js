import React, { useEffect, useRef, useState} from "react";
import {useSelector, useDispatch, Provider} from "react-redux";
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { store } from "../store";

const galleryinitialstate = ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','film024.jpg','film018.jpg','film029.jpg','film030.jpg','film021.jpg','film025.jpg','film026.jpg'];



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


