import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import productReducer from './productSlice'

export const store = configureStore({
  reducer: {
    // reducers will go here
    cart: cartReducer,
    products: productReducer
  }
})
