import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    name: 'orhan'
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value += 1
        },
        decrement: (state, action) => {
            if (state.value === 0) return alert('Error')
            state.value -= 1
        },
        changeByValue: (state, action) => {
            console.log(action)
            state.value = action.payload
        },
        changeByName: (state, action) => {
            state.name = action.payload
        }
    }

})

export const { increment, decrement, changeByValue ,changeByName} = counterSlice.actions
export default counterSlice.reducer