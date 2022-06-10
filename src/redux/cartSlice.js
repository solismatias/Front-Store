// A "slice" is a collection of Redux reducer logic and actions for a single feature in your app
import { createSlice } from '@reduxjs/toolkit'

const initialState = { products: [] }


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      let product = { attributes: action.payload.attributes, item: action.payload.item, amount: 1 }
      state.products.push(product)
    }
  }
})

export const { addItem } = cartSlice.actions

// export const selectCartItems = (state) => state.cart

export default cartSlice.reducer