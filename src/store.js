import React, { useEffect, useRef, useState} from "react";
import {useSelector, useDispatch, Provider} from "react-redux";
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { gallery, galleryreducer } from "./gallery/gallerySlice";
import { gallerysidebarfilmSlice, gallerysidebardigitalSlice } from "./gallery/gallerysidebar";
import { pageSlice } from "./gallery/pageSlice";
import { moreinfoSlice } from "./gallery/moreinfoSlice";


export const store = configureStore({
    reducer:{
        gallery: gallery.reducer,
        gallerysidebarfilm: gallerysidebarfilmSlice.reducer,
        gallerysidebardigital: gallerysidebardigitalSlice.reducer,
        pagecontroler: pageSlice.reducer,
        moreinfo: moreinfoSlice.reducer,
    }
});