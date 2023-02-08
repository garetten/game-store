import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import basketSlice from "./slice/basketSlice";
import currentGameSlice from "./slice/currentGame";


const store = configureStore({
    reducer:{
        basket: basketSlice,
        currentGame: currentGameSlice,
    }
}
);


export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = ()=> useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector