const counterSelector = (store: { counterSlice: { counter: number } }) => store.counterSlice.counter;

export {
    counterSelector
}