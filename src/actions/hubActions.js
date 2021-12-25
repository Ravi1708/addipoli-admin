import axios from "axios";
import {
  DELIVERY_PARTNER_CREATE_FAIL,
  DELIVERY_PARTNER_CREATE_REQUEST,
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
  DELIVERY_PARTNER_UPDATE_SUCCESS,
  HUB_CREATE_FAIL,
  HUB_CREATE_REQUEST,
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
  HUB_UPDATE_SUCCESS,
} from "../constants/hubConstants";

const URL = "https://api.addipoli-puttus.com";

//=============================== hub Actions ===========================

//--------------------------- list hubs --------------------------------

export const listhubs = () => async (dispatch, getState) => {
  try {
    dispatch({ type: HUB_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    console.log(userInfo.accessToken);

    const config = {
      headers: {
        "content-Type": "application/json",
        "x-access-token": `${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.get(`${URL}/admin/hubs`, config);
    dispatch({
      type: HUB_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: HUB_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//------------------------------- get single hub details--------------

export const listhubDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: HUB_DETAILS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "content-Type": "application/json",
        "x-access-token": `${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.get(`${URL}/admin/hub/${id}`, config);

    dispatch({
      type: HUB_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: HUB_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//----------------------------create hub ---------------------

export const createhub =
  ({
    hubId,
    hubName,
    password,
    city,
    latitude,
    street,
    district,
    state,
    pincode,
    longitude,
    hubIncharge,
    InchargeNumber,
    allotedPartners,
  }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: HUB_CREATE_REQUEST,
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
        `${URL}/admin/hub`,
        {
          hubId,
          hubName,
          password,
          city,
          latitude,
          street,
          district,
          state,
          pincode,
          longitude,
          hubIncharge,
          InchargeNumber,
          allotedPartners,
        },
        config
      );

      dispatch({
        type: HUB_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: HUB_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//---------------------------update hub ------------------------------

export const updatehub = (details) => async (dispatch, getState) => {
  try {
    dispatch({
      type: HUB_UPDATE_REQUEST,
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

    const { data } = await axios.put(`${URL}/admin/hub/`, details, config);

    dispatch({
      type: HUB_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: HUB_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//---------------------------  delete hub ---------------------------

export const deletehub = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: HUB_DELETE_REQUEST,
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

    await axios.delete(`${URL}/admin/hub/${id}`, config);

    dispatch({
      type: HUB_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: HUB_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//=============================== partners Actions ===========================

//--------------------------- list partners --------------------------------

export const listpartners = () => async (dispatch, getState) => {
  try {
    dispatch({ type: DELIVERY_PARTNER_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "content-Type": "application/json",
        "x-access-token": `${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.get(`${URL}/admin/delivery-partners`, config);

    dispatch({
      type: DELIVERY_PARTNER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELIVERY_PARTNER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//------------------------------- get single partner details--------------

export const listpartnerDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELIVERY_PARTNER_DETAILS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "content-Type": "application/json",
        "x-access-token": `${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.get(
      `${URL}/admin/delivery-partner/${id}`,
      config
    );

    dispatch({
      type: DELIVERY_PARTNER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELIVERY_PARTNER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//----------------------------create partner ---------------------

export const createpartner =
  ({
    partnerName,
    partnerId,
    partnerIncharge,
    InchargeNumber,
    location,
    pincode,
  }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: DELIVERY_PARTNER_CREATE_REQUEST,
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
        `${URL}/admin/delivery-partner`,
        {
          partnerName,
          partnerId,
          partnerIncharge,
          InchargeNumber,
          location,
          pincode,
        },
        config
      );

      dispatch({
        type: DELIVERY_PARTNER_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELIVERY_PARTNER_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//---------------------------update partner------------------------------

export const updatepartner = (partner) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELIVERY_PARTNER_UPDATE_REQUEST,
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
      `${URL}/admin/delivery-partner`,
      partner,
      config
    );

    dispatch({
      type: DELIVERY_PARTNER_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELIVERY_PARTNER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//---------------------------  delete product ---------------------------

export const deletepartner = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELIVERY_PARTNER_DELETE_REQUEST,
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

    await axios.delete(`${URL}/admin/delivery-partner/${id}`, config);

    dispatch({
      type: DELIVERY_PARTNER_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: DELIVERY_PARTNER_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
