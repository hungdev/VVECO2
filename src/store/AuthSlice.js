import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { login } from '../services/ApiConfig'

const initialState = {
  products: [],
  token: null,
  loading: false
}

export const signInApi = createAsyncThunk('auth/login', async (params, thunkAPI) => {
  // thunkAPI.dispatch(...)
  const list = await login(params, { token: 'token' });
  console.log('list', list);
  return list;
});


export const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    clearState: (state, action) => {
      console.log('action', action)
      state.token = null
      // return ({
      //   ...state,
      //   products: [...state.products, action.payload]
      // })
    },
  },
  // handle response data from api
  extraReducers: {
    // login
    [signInApi.pending]: (state, action) => {
      state.loading = true;
    },
    [signInApi.fulfilled]: (state, action) => {
      console.tron.log('login', action.payload.data)
      state.loading = false;
      state.token = action.payload.data.token;
    },
    [signInApi.rejected]: (state, action) => {
      state.token = null;
    },

  }
})

// Action creators are generated for each case reducer function
export const { clearState } = authSlice.actions

export default authSlice.reducer