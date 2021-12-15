import {
  BLOG_CREATE_FAIL,
  BLOG_CREATE_REQUEST,
  BLOG_CREATE_RESET,
  BLOG_CREATE_SUCCESS,
  BLOG_DELETE_FAIL,
  BLOG_DELETE_REQUEST,
  BLOG_DELETE_SUCCESS,
  BLOG_DETAILS_FAIL,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS,
  BLOG_LIST_FAIL,
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_UPDATE_FAIL,
  BLOG_UPDATE_REQUEST,
  BLOG_UPDATE_RESET,
  BLOG_UPDATE_SUCCESS,
  SLIDER_CREATE_FAIL,
  SLIDER_CREATE_REQUEST,
  SLIDER_CREATE_RESET,
  SLIDER_CREATE_SUCCESS,
  SLIDER_DELETE_FAIL,
  SLIDER_DELETE_REQUEST,
  SLIDER_DELETE_SUCCESS,
  SLIDER_DETAILS_FAIL,
  SLIDER_DETAILS_REQUEST,
  SLIDER_DETAILS_SUCCESS,
  SLIDER_LIST_FAIL,
  SLIDER_LIST_REQUEST,
  SLIDER_LIST_SUCCESS,
} from "../constants/webConstants";

//=============================== slider reducer =======================/

//==============================List sliders ===========================//

export const sliderListReducer = (state = { sliders: [] }, action) => {
  switch (action.type) {
    case SLIDER_LIST_REQUEST:
      return { loading: true, sliders: [] };
    case SLIDER_LIST_SUCCESS:
      return {
        loading: false,
        sliders: action.payload,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case SLIDER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//======================= create new slider ==========================/

export const sliderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SLIDER_CREATE_REQUEST:
      return { loading: true };
    case SLIDER_CREATE_SUCCESS:
      return { loading: false, success: true, slider: action.payload };
    case SLIDER_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case SLIDER_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

//==================== get slider details ======================/

export const sliderDetailsReducer = (state = { slider: {} }, action) => {
  switch (action.type) {
    case SLIDER_DETAILS_REQUEST:
      return { loading: true, ...state };
    case SLIDER_DETAILS_SUCCESS:
      return { loading: false, slider: action.payload };
    case SLIDER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//======================delete slider =============================/

export const sliderDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SLIDER_DELETE_REQUEST:
      return { loading: true };
    case SLIDER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case SLIDER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//=============================== blogs reducer =======================/

//==============================List blogs ===========================//

export const blogListReducer = (state = { blogs: [] }, action) => {
  switch (action.type) {
    case BLOG_LIST_REQUEST:
      return { loading: true, blogs: [] };
    case BLOG_LIST_SUCCESS:
      return {
        loading: false,
        blogs: action.payload,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case BLOG_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//======================= create new blog ==========================/

export const blogCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_CREATE_REQUEST:
      return { loading: true };
    case BLOG_CREATE_SUCCESS:
      return { loading: false, success: true, blog: action.payload };
    case BLOG_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case BLOG_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

//==================== get blog details ======================/

export const blogDetailsReducer = (
  state = { blog: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case BLOG_DETAILS_REQUEST:
      return { loading: true, ...state };
    case BLOG_DETAILS_SUCCESS:
      return { loading: false, blog: action.payload };
    case BLOG_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//========================= update existing blog ====================

export const blogUpdateReducer = (state = { blog: {} }, action) => {
  switch (action.type) {
    case BLOG_UPDATE_REQUEST:
      return { loading: true };
    case BLOG_UPDATE_SUCCESS:
      return { loading: false, success: true, blog: action.payload };
    case BLOG_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case BLOG_UPDATE_RESET:
      return { blog: {} };
    default:
      return state;
  }
};

//======================delete blog =============================/

export const blogDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_DELETE_REQUEST:
      return { loading: true };
    case BLOG_DELETE_SUCCESS:
      return { loading: false, success: true };
    case BLOG_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
