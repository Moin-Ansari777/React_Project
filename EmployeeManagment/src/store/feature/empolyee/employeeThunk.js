import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../config/axios";

export const fetchData = createAsyncThunk(
    'employee/fetchData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('employee')
            return await response.data
        } catch (error) {
            return rejectWithValue('Something Went Wrong');
        }
    }
)
export const postEmployee = createAsyncThunk(
    'employee/postEmployee',
    async (details, { rejectWithValue, dispatch }) => {
        try {
            const response = await api.post('employee', details)
            dispatch(fetchData())
            return await response.data
        } catch (error) {
            return rejectWithValue("Something Wrong")
        }
    })

export const deleteEmployee = createAsyncThunk(
    'employee/deleteEmployee',
    async (id, { rejectWithValue, dispatch }) => {
        try {
            const response = await api.delete(`employee/${id}`)
            dispatch(fetchData())
            return await response.data
        } catch (error) {
            return rejectWithValue("Something Wrong")
        }
    })

export const UpdateEmployee = createAsyncThunk(
    'employee/UpdateEmployee',
    async ({ id, details }, { rejectWithValue, dispatch }) => {
        try {
            const response = await api.put(`employee/${id}`, details)
            dispatch(fetchData())
            
            return await response.data
        } catch (error) {
            return rejectWithValue("Something Wrong")
        }
    })
