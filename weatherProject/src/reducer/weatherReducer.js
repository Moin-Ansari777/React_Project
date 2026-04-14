import { FORECAST_FETCH_SUCCESS, SET_CITY, WEATHER_FETCH_ERROR, WEATHER_FETCH_PENDING, WEATHER_FETCH_SUCCESS } from "../constant/weatherConstant"

const intialState = {
    city: 'Muzaffarnagar',
    current: null,
    forecast: null,
    loading: false,
    error: null,

}

export const weatherReducer = (state = intialState, action) => {
    if (action.type === WEATHER_FETCH_PENDING) {
        return {
            ...state,
            loading: true,
            error: null,
        }
    }
    else if (action.type === WEATHER_FETCH_SUCCESS) {
        return {
            ...state,
            loading: false,
            current: action.payload
        }
    }
    else if (action.type === FORECAST_FETCH_SUCCESS) {
        return {
            ...state,
            loading: false,
            forecast: action.payload
        }

    }
    else if (action.type === WEATHER_FETCH_ERROR) {
        return {
            ...state,
            loading: false,
            error: action.payload
        }
    }
    else if (action.type === SET_CITY) {
        return {
            ...state,
            city: action.payload
        }
    }
    else {
        return state
    }
}