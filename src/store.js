import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productCreateReducer,
  productDetailsReducer,
  productUpdateReducer,
  productDeleteReducer,
  itemListReducer,
  itemCreateReducer,
  itemDetailsReducer,
  itemUpdateReducer,
  itemDeleteReducer,
} from "./reducers/productReducers";

import {
  partnerListReducer,
  partnerCreateReducer,
  partnerDetailsReducer,
  partnerUpdateReducer,
  partnerDeleteReducer,
  hubListReducer,
  hubCreateReducer,
  hubDetailsReducer,
  hubUpdateReducer,
  hubDeleteReducer,
} from "./reducers/hubReducers";

import {
  sliderListReducer,
  sliderCreateReducer,
  sliderDetailsReducer,
  sliderDeleteReducer,
  blogListReducer,
  blogCreateReducer,
  blogDetailsReducer,
  blogUpdateReducer,
  blogDeleteReducer,
} from "./reducers/webReducers";

import {
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  userUpdateReducer,
} from "./reducers/userReducers";

import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  // orderListReducer,
  OngoingOrderListReducer,
} from "./reducers/orderReducers";

//combine reducer to get all reducers
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  itemList: itemListReducer,
  itemDetails: itemDetailsReducer,
  itemDelete: itemDeleteReducer,
  itemCreate: itemCreateReducer,
  itemUpdate: itemUpdateReducer,
  hubList: hubListReducer,
  hubDetails: hubDetailsReducer,
  hubDelete: hubDeleteReducer,
  hubCreate: hubCreateReducer,
  hubUpdate: hubUpdateReducer,
  partnerList: partnerListReducer,
  partnerDetails: partnerDetailsReducer,
  partnerDelete: partnerDeleteReducer,
  partnerCreate: partnerCreateReducer,
  partnerUpdate: partnerUpdateReducer,
  sliderList: sliderListReducer,
  sliderDetails: sliderDetailsReducer,
  sliderDelete: sliderDeleteReducer,
  sliderCreate: sliderCreateReducer,
  blogList: blogListReducer,
  blogDetails: blogDetailsReducer,
  blogDelete: blogDeleteReducer,
  blogCreate: blogCreateReducer,
  blogUpdate: blogUpdateReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  // orderList: orderListReducer,
  OngoingOrderList: OngoingOrderListReducer,
});

//get user info from local storage
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

//thunk middleware
const middleware = [thunk];

//redux store constant
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
