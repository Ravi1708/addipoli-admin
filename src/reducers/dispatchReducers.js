import {
  COOKED_CREATE_FAIL,
  COOKED_CREATE_REQUEST,
  COOKED_CREATE_RESET,
  COOKED_CREATE_SUCCESS,
  COOKED_DELETE_FAIL,
  COOKED_DELETE_REQUEST,
  COOKED_DELETE_SUCCESS,
  COOKED_LIST_FAIL,
  COOKED_LIST_REQUEST,
  COOKED_LIST_SUCCESS,
  COOKED_UPDATE_FAIL,
  COOKED_UPDATE_REQUEST,
  COOKED_UPDATE_RESET,
  COOKED_UPDATE_SUCCESS,
  DISPATCH_CREATE_FAIL,
  DISPATCH_CREATE_REQUEST,
  DISPATCH_CREATE_RESET,
  DISPATCH_CREATE_SUCCESS,
  DISPATCH_DELETE_FAIL,
  DISPATCH_DELETE_REQUEST,
  DISPATCH_DELETE_SUCCESS,
  DISPATCH_DETAILS_FAIL,
  DISPATCH_DETAILS_REQUEST,
  DISPATCH_DETAILS_SUCCESS,
  DISPATCH_LIST_FAIL,
  DISPATCH_LIST_REQUEST,
  DISPATCH_LIST_SUCCESS,
  DISPATCH_UPDATE_FAIL,
  DISPATCH_UPDATE_REQUEST,
  DISPATCH_UPDATE_RESET,
  DISPATCH_UPDATE_SUCCESS,
} from "../constants/dispatchConstants";

//=============================== cookedproduct reducer =======================/

//==============================List cooked products ===========================//

export const cookedproductListReducer = (
  state = { cookedproducts: [] },
  action
) => {
  switch (action.type) {
    case COOKED_LIST_REQUEST:
      return { loading: true, cookedproducts: [] };
    case COOKED_LIST_SUCCESS:
      return {
        loading: false,
        cookedproducts: action.payload,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case COOKED_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//======================= create new cookedcooked product ==========================/

export const cookedproductCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case COOKED_CREATE_REQUEST:
      return { loading: true };
    case COOKED_CREATE_SUCCESS:
      return { loading: false, success: true, cookedproduct: action.payload };
    case COOKED_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case COOKED_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

//==================== get cookedproduct details ======================/

export const cookedproductDetailsReducer = (
  state = { cookedproduct: {} },
  action
) => {
  switch (action.type) {
    case COOKED_DETAILS_REQUEST:
      return { loading: true, ...state };
    case COOKED_DETAILS_SUCCESS:
      return { loading: false, cookedproduct: action.payload };
    case COOKED_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//========================= update existing cooked products ====================

export const cookedproductUpdateReducer = (
  state = { cookedproduct: {} },
  action
) => {
  switch (action.type) {
    case COOKED_UPDATE_REQUEST:
      return { loading: true };
    case COOKED_UPDATE_SUCCESS:
      return { loading: false, success: true, cookedproduct: action.payload };
    case COOKED_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case COOKED_UPDATE_RESET:
      return { cookedproduct: {} };
    default:
      return state;
  }
};

//======================delete cooked prioduct =============================/

export const cookedproductDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case COOKED_DELETE_REQUEST:
      return { loading: true };
    case COOKED_DELETE_SUCCESS:
      return { loading: false, success: true };
    case COOKED_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// export const productReviewCreateReducer = (state = {}, action) => {
//   switch (action.type) {
//     case PRODUCT_CREATE_REVIEW_REQUEST:
//       return { loading: true };
//     case PRODUCT_CREATE_REVIEW_SUCCESS:
//       return { loading: false, success: true };
//     case PRODUCT_CREATE_REVIEW_FAIL:
//       return { loading: false, error: action.payload };
//     case PRODUCT_CREATE_REVIEW_RESET:
//       return {};
//     default:
//       return state;
//   }
// };

//=============================== dispatch reducer =======================/

//==============================List dispatch ===========================//

export const dispatchListReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case DISPATCH_LIST_REQUEST:
      return { loading: true, items: [] };
    case DISPATCH_LIST_SUCCESS:
      return {
        loading: false,
        dispatch: action.payload,
      };
    case DISPATCH_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//======================= create new dispatch ==========================/

export const dispatchCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case DISPATCH_CREATE_REQUEST:
      return { loading: true };
    case DISPATCH_CREATE_SUCCESS:
      return { loading: false, success: true, dispatch: action.payload };
    case DISPATCH_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case DISPATCH_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

//==================== get dispatch details ======================/

export const dispatchDetailsReducer = (state = { dispatch: {} }, action) => {
  switch (action.type) {
    case DISPATCH_DETAILS_REQUEST:
      return { loading: true, ...state };
    case DISPATCH_DETAILS_SUCCESS:
      return { loading: false, dispatch: action.payload };
    case DISPATCH_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//========================= update existing dispatch ====================

export const itemUpdateReducer = (state = { dispatch: {} }, action) => {
  switch (action.type) {
    case DISPATCH_UPDATE_REQUEST:
      return { loading: true };
    case DISPATCH_UPDATE_SUCCESS:
      return { loading: false, success: true, dispatch: action.payload };
    case DISPATCH_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case DISPATCH_UPDATE_RESET:
      return { dispatch: {} };
    default:
      return state;
  }
};

//======================delete dispatch =============================/

export const dispatchDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DISPATCH_DELETE_REQUEST:
      return { loading: true };
    case DISPATCH_DELETE_SUCCESS:
      return { loading: false, success: true };
    case DISPATCH_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
