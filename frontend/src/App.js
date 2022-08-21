import React from "react";
import AppRoutes from "./AppRoutes";
import {Provider} from "react-redux";
import {store} from "./client/auth/store/store";
import {Routes} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  )
}

export default App;
