import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  keyword: '',
  destination: '',
  dateFrom: null,
  dateTo: null,
  category: 'all',
  priceRange: [0, 5000],
  guests: 1,
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setKeyword: (state, action) => { state.keyword = action.payload },
    setDestination: (state, action) => { state.destination = action.payload },
    setCategory: (state, action) => { state.category = action.payload },
    setPriceRange: (state, action) => { state.priceRange = action.payload },
    setGuests: (state, action) => { state.guests = action.payload },
    resetFilters: () => initialState,
  },
})

export const { setKeyword, setDestination, setCategory, setPriceRange, setGuests, resetFilters } = filterSlice.actions
export default filterSlice.reducer