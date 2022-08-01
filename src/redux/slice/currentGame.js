import { createSlice } from "@reduxjs/toolkit";

const currentGameSlice = createSlice({
    name: 'currentGame',
    initialState:{
        currentGame:null
    },

    reducers:{
        setCurrentGame(state,action){
            console.log(action.payload.payload)
            console.log(state.currentGame)
            state.currentGame = action.payload.payload;
            return state;
        }
    }

})

export const {setCurrentGame} = currentGameSlice.actions;

export default currentGameSlice.reducer;