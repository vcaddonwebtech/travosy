import { configureStore } from '@reduxjs/toolkit'
import filterSlice from "./slices/filterSlice"
import  themeSlice   from './slices/themeSlice'
export const store = configureStore({
  reducer: {
    // auth: authSlice,
    // tours: toursSlice,
    filters: filterSlice,
    theme: themeSlice,
  },
})