import createEmployeeReducer from '../features/createEmployee';
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    createEmployee: createEmployeeReducer,
  },
})