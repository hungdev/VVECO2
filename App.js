import { View, Text } from "react-native";
import React from "react";
//Redux
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import Navigation from "./src/navigation";

import { store } from './src/store/store'

export default function Detail() {
  let persistor = persistStore(store)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}
