import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGame } from "../../types/types";

const initialState:IGame[]=[];

const basketSlice = createSlice({
    name:"basket",
    initialState,
    reducers:{
        addCart(state,action:PayloadAction<IGame>){
            state.push(action.payload);
            return state;
        },
        deleteCart(state,action:PayloadAction<number>){
            state = state.filter(game=>game.id !== action.payload)
            return state;
        },
        deleteAll(state){
            state = [];
            return state
        }
        
    }
})

export const {addCart,deleteCart,deleteAll} = basketSlice.actions;
export default basketSlice.reducer;