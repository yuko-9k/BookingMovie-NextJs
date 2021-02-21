import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootreducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
