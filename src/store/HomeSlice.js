import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const productSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log('action', action)
      state.products.push(action.payload)
      // return ({
      //   ...state,
      //   products: [...state.products, action.payload]
      // })
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProduct } = productSlice.actions

export default productSlice.reducer