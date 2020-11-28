import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Home from "./app/index";
import rootReducers from "./app/components/reducers";

const store = createStore(rootReducers, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
