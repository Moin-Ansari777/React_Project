import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employeePopup: false,
    deletePopup: false,
}



const popupSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        openEmployeePopup: (state, action) => {
            state.employeePopup = action.payload ?? true;
        },
        deleteEmployeePopup: (state, action) => {
            state.employeePopup = false;
        },
        openDeletePopup: (state, action) => {
            state.deletePopup =action.payload ?? true;
        },
        closeDeletePopup: (state, action) => {
            state.deletePopup = false;
        }
    }
})

export const  {openEmployeePopup,deleteEmployeePopup ,openDeletePopup, closeDeletePopup} = popupSlice.actions
export default popupSlice.reducer