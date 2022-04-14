import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { getTodo, updateTodo } from '../services/ApiConfig'

const initialState = {
  products: [],
  todo: [],
  loading: false
}

export const getListTodo = createAsyncThunk('todo/getListTodoKey', async (params, thunkAPI) => {
  // thunkAPI.dispatch(...)
  const list = await getTodo();
  console.log('list', list);
  return list;
});
export const updateListTodo = createAsyncThunk('todo/updateListTodoKey', async (params, thunkAPI) => {
  // thunkAPI.dispatch(...)
  console.tron.log('params', params)
  const list = await updateTodo(params.id, params.data);
  console.log('list', list);
  return list;
});

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
    removeProduct: (state, action) => {
      console.log('action', action)
      // state.products.push(action.payload)
      // return ({
      //   ...state,
      //   products: [...state.products, action.payload]
      // })
    },
  },
  // handle response data from api
  extraReducers: {
    // get list todo
    // [getListTodo.pending]: (state, action) => {
    //   state.loading = true;
    // },
    [getListTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.todo = action.payload.data;
    },
    // [getListTodo.rejected]: (state, action) => {
    //   state.todo = [];
    // },

    // update list todo
    [updateListTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.todo = action.payload.data;
    },


  }
})

// Action creators are generated for each case reducer function
export const { addProduct } = productSlice.actions

export default productSlice.reducer