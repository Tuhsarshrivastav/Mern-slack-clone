import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
const middleware = [thunk];
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(middleware))
);
export default store;
