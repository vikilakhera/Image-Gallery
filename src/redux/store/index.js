import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = () => {
  const thunkMiddleWares = [thunkMiddleware].filter(Boolean);
  const middleWares = composeWithDevTools(applyMiddleware(...thunkMiddleWares));
  const store = createStore(rootReducer, middleWares);
  return store;
};

export default configureStore;