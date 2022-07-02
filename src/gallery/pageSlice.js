import { configureStore, createSlice } from '@reduxjs/toolkit'

export const pageSlice = createSlice({
    name: 'pageSlice',
    initialState: 1,
    reducers:{
        nextpage(state, actions){
            if(state<actions.payload){
                return state+1;
            }
        },
        previouspage(state){
            if(state>1){
                return state-1;
            }
        },
        firstpage(state){
            return 1;
        },
        lastpage(state, actions){
            return actions.payload;
        }
    }
}) 