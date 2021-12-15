import axios from "axios";
import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_SUCCESS,
  ITEM_LIST_REQUEST,
  ITEM_LIST_SUCCESS,
  ITEM_LIST_FAIL,
  ITEM_DETAILS_REQUEST,
  ITEM_DETAILS_SUCCESS,
  ITEM_DETAILS_FAIL,
  ITEM_CREATE_REQUEST,
  ITEM_CREATE_SUCCESS,
  ITEM_CREATE_FAIL,
  ITEM_UPDATE_REQUEST,
  ITEM_UPDATE_SUCCESS,
  ITEM_UPDATE_FAIL,
  ITEM_DELETE_REQUEST,
  ITEM_DELETE_SUCCESS,
  ITEM_DELETE_FAIL,
} from "../constants/productConstants";

const URL = "https://api.addipoli-puttus.com";

//=============================== product Actions ===========================

//--------------------------- list products --------------------------------

export const listProducts = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "content-Type": "application/json",
        "x-access-token": `${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.get(`${URL}/admin/products`, config);
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//------------------------------- get single product details--------------

export const listProductDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "content-Type": "application/json",
        "x-access-token": `${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.get(`${URL}/admin/product/${id}`, config);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//----------------------------create product ---------------------

export const createProduct = (formData) => async (dispatch, getState) => {
  console.log(formData);
  try {
    dispatch({
      type: PRODUCT_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "content-Type": "application/json",
        "x-access-token": `${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.post(
      `${URL}/admin/product/`,
      formData,
      config
    );

    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//---------------------------update product ------------------------------

export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "content-Type": "application/json",
        "x-access-token": `${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.put(
      `${URL}/api/products/${product._id}`,
      product,
      config
    );

    dispatch({
      type: PRODUCT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//---------------------------  delete product ---------------------------

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "content-Type": "application/json",
        "x-access-token": `${userInfo.accessToken}`,
      },
    };

    await axios.delete(`${URL}/admin/product/${id}`, config);

    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//=============================== Items Actions ===========================

//--------------------------- list Items --------------------------------

export const listitems = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ITEM_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "content-Type": "application/json",
        "x-access-token": `${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.get(`${URL}/admin/items`, config);

    dispatch({
      type: ITEM_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ITEM_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//------------------------------- get single item details--------------

export const listitemDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ITEM_DETAILS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "content-Type": "application/json",
        "x-access-token": `${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.get(`${URL}/admin/item/${id}`, config);

    dispatch({
      type: ITEM_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ITEM_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//----------------------------create Item ---------------------

export const createitem =
  ({ itemId, itemName, quantity, type }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: ITEM_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "content-Type": "application/json",
          "x-access-token": `${userInfo.accessToken}`,
        },
      };

      const { data } = await axios.post(
        `${URL}/admin/item`,
        { itemId, itemName, quantity, type },
        config
      );

      dispatch({
        type: ITEM_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ITEM_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//---------------------------update item------------------------------

export const updateitem = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ITEM_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "content-Type": "application/json",
        "x-access-token": `${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.put(`${URL}/admin/item`, product, config);

    dispatch({
      type: ITEM_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ITEM_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//---------------------------  delete product ---------------------------

export const deleteitem = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ITEM_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "content-Type": "application/json",
        "x-access-token": `${userInfo.accessToken}`,
      },
    };

    await axios.delete(`${URL}/admin/item/${id}`, config);

    dispatch({
      type: ITEM_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: ITEM_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
