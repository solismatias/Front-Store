// A "slice" is a collection of Redux reducer logic and actions for a single feature in your app
import { createSlice } from '@reduxjs/toolkit'

const initialState = { products: [] }


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      let product = { attributes: action.payload.attributes, item: action.payload.item, amount: action.payload.amount, id: action.payload.item.id }
      state.products.push(product)
    },
    updateAttribute: (state, action) => {
      let item = action.payload
      let index = state.products.findIndex(e => e.id === item.productId)
      state.products[index].attributes[item.name] = item.value
    }
  }
})

export const { addItem, updateAttribute } = cartSlice.actions


export default cartSlice.reducer