import { createSlice } from "@reduxjs/toolkit";


type counterSliceScheme = {
    counter: number
};

const initialState: counterSliceScheme = {
    counter: 0,
}


const counterSlice = createSlice({
    name: "counterSlice",
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1
        },
        decrement: (state) => {
            state.counter -= 1
        },
        setValue: (state, { payload }) => {
            const { value } = payload
            state.counter = value
        }
    }
});


export const {
    reducer: counterSliceReducer,
    actions: counterSliceActions,
} = counterSlice