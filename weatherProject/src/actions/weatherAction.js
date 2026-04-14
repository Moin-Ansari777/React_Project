import { FORECAST_FETCH_SUCCESS, SET_CITY, WEATHER_FETCH_ERROR, WEATHER_FETCH_PENDING, WEATHER_FETCH_SUCCESS } from "../constant/weatherConstant"
import axios from 'axios'
import  {api} from '../config/axios'
const apikey = import.meta.env.VITE_WEATHER_API;


export const weatherFetchPending = ()=>{
return{
    type:WEATHER_FETCH_PENDING,
}
}

export const weatherFetchSuccess = (detail) =>{
    return{
        type:WEATHER_FETCH_SUCCESS,
        payload:detail,
    }
}

export const forecastFetchSuccess = (detail) =>{
    return{
        type:FORECAST_FETCH_SUCCESS,
        payload:detail
    }
}

export const weatherFetchError = (error) =>{
    return{
        type:WEATHER_FETCH_ERROR,
        payload:error
    }
}

export const setCity = (city) =>{
    return{
        type:SET_CITY,
        payload:city
    }
}
export const fetchWeather =()=>{
    return async (dispatch)=>{
        
    }
}