import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  productListReducer,
  productDetailsReducer
} from "./reducers/productReducers";
import {
  userSigninReducer,
  userRegisterReducer
} from "./reducers/userReducers";

const initalState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null
  }
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initalState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
