// A "slice" is a collection of Redux reducer logic and actions for a single feature in your app
import { useQuery } from '@apollo/client'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GET_CURRENCIES } from '../utils/queries'

const initialState = { label: 'USD', symbol: '$' }

export const getCurrenciesAsync = createAsyncThunk(
  "currency/fetchCurrencies",
  () => {
    const { loading, error, data } = useQuery(GET_CURRENCIES);
    console.log("antes del data");
    console.log(data);
    console.log("despues del data");
    return data
  }
)



export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.label = action.payload.label
      state.symbol = action.payload.symbol
      console.log(state.label)
      console.log(state.symbol)
    }
  }
})

export const { setCurrency } = currencySlice.actions

// export const selectCurrency = (state) => state.currency

export default currencySlice.reducer