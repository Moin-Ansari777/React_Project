import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeByValue, decrement, increment } from '../../store/feature/counter/counterSlice';

const Counter = () => {

    const [value, setValue] = useState();

    const dispatch = useDispatch();
    const state = useSelector(state => state.counter.value);
    console.log(state)
    const incrementB = () => {
        dispatch(increment())
    }
    const decrementB = () => {
        dispatch(decrement())
    }
    const handleInput = () => {
        dispatch(changeByValue(value))
    }

    useEffect(() => {
        console.log('rerender trigger')
    }, [])

    return (
        <div>
            <h1 className='p-2 text-2xl'>{state}</h1>
            <button onClick={incrementB} className='p-4 m-2 border-2'>Increment</button>
            <button onClick={decrementB}>decrement</button>
            <input type="number"
                placeholder='NUmber'
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={handleInput}>Submit Value</button>
        </div>
    )
}

export default Counter
