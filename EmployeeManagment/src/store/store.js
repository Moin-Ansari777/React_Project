import { configureStore } from '@reduxjs/toolkit'
import popupReducer from './feature/popup/popup'
import employeeReducer from './feature/empolyee/employeeSlice'

export const store = configureStore({
    reducer: {
        popup: popupReducer,
        employee : employeeReducer,
    },
})