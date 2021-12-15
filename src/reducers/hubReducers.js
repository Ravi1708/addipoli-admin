import {
  DELIVERY_PARTNER_CREATE_FAIL,
  DELIVERY_PARTNER_CREATE_REQUEST,
  DELIVERY_PARTNER_CREATE_RESET,
  DELIVERY_PARTNER_CREATE_SUCCESS,
  DELIVERY_PARTNER_DELETE_FAIL,
  DELIVERY_PARTNER_DELETE_REQUEST,
  DELIVERY_PARTNER_DELETE_SUCCESS,
  DELIVERY_PARTNER_DETAILS_FAIL,
  DELIVERY_PARTNER_DETAILS_REQUEST,
  DELIVERY_PARTNER_DETAILS_SUCCESS,
  DELIVERY_PARTNER_LIST_FAIL,
  DELIVERY_PARTNER_LIST_REQUEST,
  DELIVERY_PARTNER_LIST_SUCCESS,
  DELIVERY_PARTNER_UPDATE_FAIL,
  DELIVERY_PARTNER_UPDATE_REQUEST,
  DELIVERY_PARTNER_UPDATE_RESET,
  DELIVERY_PARTNER_UPDATE_SUCCESS,
  HUB_CREATE_FAIL,
  HUB_CREATE_REQUEST,
  HUB_CREATE_RESET,
  HUB_CREATE_SUCCESS,
  HUB_DELETE_FAIL,
  HUB_DELETE_REQUEST,
  HUB_DELETE_SUCCESS,
  HUB_DETAILS_FAIL,
  HUB_DETAILS_REQUEST,
  HUB_DETAILS_SUCCESS,
  HUB_LIST_FAIL,
  HUB_LIST_REQUEST,
  HUB_LIST_SUCCESS,
  HUB_UPDATE_FAIL,
  HUB_UPDATE_REQUEST,
  HUB_UPDATE_RESET,
  HUB_UPDATE_SUCCESS,
} from "../constants/hubConstants";

//=============================== delivery partner reducer =======================/

//==============================List Partners ===========================//

export const partnerListReducer = (state = { partners: [] }, action) => {
  switch (action.type) {
    case DELIVERY_PARTNER_LIST_REQUEST:
      return { loading: true, partners: [] };
    case DELIVERY_PARTNER_LIST_SUCCESS:
      return {
        loading: false,
        partners: action.payload,
      };
    case DELIVERY_PARTNER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//======================= create new partner ==========================/

export const partnerCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case DELIVERY_PARTNER_CREATE_REQUEST:
      return { loading: true };
    case DELIVERY_PARTNER_CREATE_SUCCESS:
      return { loading: false, success: true, partner: action.payload };
    case DELIVERY_PARTNER_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case DELIVERY_PARTNER_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

//==================== get partner details ======================/

export const partnerDetailsReducer = (state = { partner: {} }, action) => {
  switch (action.type) {
    case DELIVERY_PARTNER_DETAILS_REQUEST:
      return { loading: true, ...state };
    case DELIVERY_PARTNER_DETAILS_SUCCESS:
      return { loading: false, partner: action.payload };
    case DELIVERY_PARTNER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//========================= update existing partner ====================

export const partnerUpdateReducer = (state = { partner: {} }, action) => {
  switch (action.type) {
    case DELIVERY_PARTNER_UPDATE_REQUEST:
      return { loading: true };
    case DELIVERY_PARTNER_UPDATE_SUCCESS:
      return { loading: false, success: true, partner: action.payload };
    case DELIVERY_PARTNER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case DELIVERY_PARTNER_UPDATE_RESET:
      return { partner: {} };
    default:
      return state;
  }
};

//======================delete partner =============================/

export const partnerDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELIVERY_PARTNER_DELETE_REQUEST:
      return { loading: true };
    case DELIVERY_PARTNER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case DELIVERY_PARTNER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//=============================== hub reducer =======================/

//==============================List Hubs ===========================//

export const hubListReducer = (state = { hubs: [] }, action) => {
  switch (action.type) {
    case HUB_LIST_REQUEST:
      return { loading: true, hubs: [] };
    case HUB_LIST_SUCCESS:
      return {
        loading: false,
        hubs: action.payload,
      };
    case HUB_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//======================= create new Hub ==========================/

export const hubCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case HUB_CREATE_REQUEST:
      return { loading: true };
    case HUB_CREATE_SUCCESS:
      return { loading: false, success: true, hub: action.payload };
    case HUB_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case HUB_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

//==================== get hub details ======================/

export const hubDetailsReducer = (state = { hub: {} }, action) => {
  switch (action.type) {
    case HUB_DETAILS_REQUEST:
      return { loading: true, ...state };
    case HUB_DETAILS_SUCCESS:
      return { loading: false, hub: action.payload };
    case HUB_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//========================= update existing hub ====================

export const hubUpdateReducer = (state = { hub: {} }, action) => {
  switch (action.type) {
    case HUB_UPDATE_REQUEST:
      return { loading: true };
    case HUB_UPDATE_SUCCESS:
      return { loading: false, success: true, hub: action.payload };
    case HUB_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case HUB_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

//======================delete hub =============================/

export const hubDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case HUB_DELETE_REQUEST:
      return { loading: true };
    case HUB_DELETE_SUCCESS:
      return { loading: false, success: true };
    case HUB_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
