import { View, Text } from "react-native";
import React from "react";
//Redux
import { createStore } from "redux";
import { Provider } from "react-redux";

import allReducer from "./src/reducers";
import Navigation from "./src/navigation";

export default function Detail() {
  const store = createStore(allReducer);
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
