import { configureStore} from "@reduxjs/toolkit";
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