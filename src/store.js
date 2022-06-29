import React, { useEffect, useRef, useState} from "react";
import {useSelector, useDispatch, Provider} from "react-redux";
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { gallery, galleryreducer } from "./gallery/gallerySlice";


export const store = configureStore({
    reducer:{
        gallery: gallery.reducer,
    }
});