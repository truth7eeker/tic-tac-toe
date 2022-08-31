import { configureStore } from "@reduxjs/toolkit";
import game from './reducers/gameSlice'

export const store = configureStore({
    reducer: {
        game
    }
})