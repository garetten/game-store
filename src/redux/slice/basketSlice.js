import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name:"basket",
    initialState:[],
    reducers:{
        addCart(state,action){
            state.push(action.payload.payload);
            return state;
        },
        deleteCart(state,action){
            console.log(action.payload.payload)
            state = state.filter(game=>game.id !== action.payload.payload)
            return state;
        }
    }
})

export const {addCart,deleteCart} = basketSlice.actions;
export default basketSlice.reducer;