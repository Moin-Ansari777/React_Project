import { createSlice } from "@reduxjs/toolkit";
import { fetchData, postEmployee, UpdateEmployee } from "./employeeThunk";

const initialState = {
    employees: [],
    loading: false,
    error: null,
}

const employeeSlice = createSlice({
    initialState,
    name: 'employee',
    reducers: {},

    extraReducers: (builder) => {

        //Get Request
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false
            state.employees = action.payload
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })

        //Post Request
        builder.addCase(postEmployee.pending, (state) => {
            state.loading = true;
            state.error = null
        })
        builder.addCase(postEmployee.fulfilled, (state, action) => {
            state.loading = false
        })
        builder.addCase(postEmployee.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })

        //Update Empoyee
        builder.addCase(UpdateEmployee.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(UpdateEmployee.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(UpdateEmployee.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
        
    }

})

export const { } = employeeSlice.actions
export default employeeSlice.reducer;