import { useSelector, useDispatch } from 'react-redux';
import { counterSelector } from './counterSelectors';
import { counterSliceActions } from './counterSlice';
import { ChangeEvent } from 'react';

const CounterInput = () => {

    const counter = useSelector(counterSelector)
    const dispatch = useDispatch();
    const { setValue } = counterSliceActions

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setValue({ value: e.target.value }));
      };

    return (
        <input
            type='number'
            value={counter}
            onChange={handleInputChange}
        />
    )
}
export { CounterInput }