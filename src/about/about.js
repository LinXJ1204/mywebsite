import React, { useEffect, useRef, useState} from "react";
import {useSelector, useDispatch, Provider} from "react-redux";
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { store } from "../store";
import './about.css';
import "animate.css";

export function About(){
    return(
        <div className="about">
            <div className="aboutheader">
                <div className="aboutborder"></div>
            </div>
            <div className="aboutcontent">
                <div className="profilephoto"><img src={require('../photo/me.jpg')}/></div>
                <div className="somethingabout">
                    <div className="myname">
                        <h1>林政委</h1>
                        <h1>Jhengwei-Lin</h1>
                        <a>aka. 少傑zz</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}