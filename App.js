import { View, Text } from "react-native";
import React from "react";
//Redux
import { createStore } from "redux";
import { Provider } from "react-redux";

import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import AsyncStorage from '@react-native-async-storage/async-storage';

// import allReducer from "./src/reducers";
import Navigation from "./src/navigation";

import { store } from './src/store/store'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: ['userReducer']
}

export default function Detail() {
  // const persistedReducer = persistReducer(persistConfig, allReducer)
  // const store = createStore(persistedReducer);
  // let persistor = persistStore(store)

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
