import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCity } from '../src/actions/weatherAction'

const Search = () => {
    const city = useSelector(state => state.cty)
    const dispatch = useDispatch()

    const handleInput = (e) => {
        dispatch(setCity(e.target.value))
    }
    return (
        <div>
            <input type="text"
                value={city}
                onChange={handleInput}
            />
        </div>
    )
}

export default Search
