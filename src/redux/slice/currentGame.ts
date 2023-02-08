import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGame } from "../../types/types";

interface IInitialCurrentGame{
    currentGame:IGame|null
} 

const initialState:IInitialCurrentGame={
    currentGame:null
};


const currentGameSlice = createSlice({
    name: 'currentGame',
    initialState,

    reducers:{
        setCurrentGame(state,action:PayloadAction<IGame>){
            state.currentGame = action.payload;
            return state;
        }
    }

})

export const {setCurrentGame} = currentGameSlice.actions;

export default currentGameSlice.reducer;