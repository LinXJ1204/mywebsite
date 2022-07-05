import { configureStore, createSlice } from '@reduxjs/toolkit';

export const moreinfoSlice = createSlice({
    name: 'moreinfoSlice',
    initialState: {open:false, photo:'01.jpg'},
    reducers:{
        moreopen(state, actions){
            return {open:true, photo: actions.payload}
        },
        closed(state){
            return {open:false, photo:'01.jpg'}
        }
    }
})