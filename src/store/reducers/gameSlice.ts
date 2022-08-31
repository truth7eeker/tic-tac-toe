import { createSlice } from "@reduxjs/toolkit";
import { calculateWinner } from "../../helpers/calculateWinner";

interface IGame {
    squares: Array<string>
    isX: boolean
    winner: string
}

const initialState:IGame = {
    squares: Array(9).fill(''),
    isX: true,
    winner: '',
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setValue(state, {payload}) {
           // block typing if winner is true or if value is already set
           if (state.winner) return
           if (state.squares[payload]) return

           // type X or O    
           state.squares[payload] = state.isX ? 'X' : 'O'
           state.isX = !state.isX
           calculateWinner(state)
           console.log(state.squares)
        },
        restart(state) {
            state.squares = Array(9).fill('')
            state.isX = true
            state.winner = ''
        }
    }
})

export const { setValue, restart } = gameSlice.actions

export default gameSlice.reducer