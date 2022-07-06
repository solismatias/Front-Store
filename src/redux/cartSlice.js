// A "slice" is a collection of Redux reducer logic and actions for a single feature in your app
import { createSlice } from '@reduxjs/toolkit'

const initialState = { products: [] }


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = {
        attributes: action.payload.attributes,
        item: action.payload.item, amount: action.payload.amount,
        id: action.payload.item.id + Object.entries(action.payload.attributes)
      }
      const index = state.products.findIndex(e => e.id === product.id)
      if (index !== -1) {
        state.products[index].amount += 1
      } else {
        state.products.push(product)
      }
    },
    updateAttribute: (state, action) => {
      const item = action.payload
      const index = state.products.findIndex(e => e.id === item.productId)
      state.products[index].attributes[item.name] = item.value
    },
    incrementAmount: (state, action) => {
      const id = action.payload
      const index = state.products.findIndex(e => e.id === id)
      state.products[index].amount += 1
    },
    decreaseAmount: (state, action) => {
      const id = action.payload
      const index = state.products.findIndex(e => e.id === id)
      state.products[index].amount -= 1
      if (state.products[index].amount === 0) {
        // if the amount is 0, proceed to delete de product
        const newItems = [...state.products]
        newItems.splice(index, 1)
        state.products = newItems
      }
    },
  }
})

export const { addItem, updateAttribute, totalPrice, incrementAmount, decreaseAmount } = cartSlice.actions


export default cartSlice.reducer