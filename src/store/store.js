import { configureStore } from '@reduxjs/toolkit'
import { createStore, combineReducers } from "redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import HomeSlice from './HomeSlice'

export const allReducers = combineReducers({
  product: HomeSlice
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, allReducers);
export const store = createStore(persistedReducer);
