import axios from "axios";
import { useDispatch } from "react-redux";
import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
  VIEW_CART,
} from "../ActionTypes/cartActiontype";
import { API } from "../API";

const token = localStorage.getItem("token");

export const viewCart = () => {
  return function (dispatch) {
    axios
      .get(`${API}/api/cart/view_cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        const cartItems = response.data;
        dispatch(viewCartSuccess(cartItems));
      });
  };
};

export const viewCartSuccess = (dataItems) => {
  return {
    type: VIEW_CART,
    payload: dataItems,
  };
};

export const addToCart = (id) => {
  console.log(id);

  return function (dispatch) {
    axios
      .post(
        `${API}/api/cart/add_product`,
        {
          cartItems: [{ product: id }],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        dispatch(addToCartSuccess(response.data.message));
      });
  };
};

export const addToCartSuccess = (message) => {
  return {
    type: ADD_TO_CART,
    payload: message,
  };
};

export const removeFromCart = (id) => {
  return function (dispatch) {
    axios
      .delete(`${API}/api/cart/remove_product/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        dispatch(removeFromCartSuccess(response.data.message));
      });
  };
};

export const removeFromCartSuccess = (message) => {
  return {
    type: REMOVE_FROM_CART,
    payload: message,
  };
};

export const increseQuant = (id) => {
  return function (dispatch) {
    axios
      .post(
        `${API}/api/cart/update_product`,
        {
          update: "add",
          product: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        dispatch(increseQuantSuccess(response.data.message));
      });
  };
};

export const increseQuantSuccess = (message) => {
  return {
    type: INCREASE_QUANTITY,
    payload: message,
  };
};

export const decreaseQuant = (id) => {
  return function (dispatch) {
    axios
      .post(
        `${API}/api/cart/update_product`,
        {
          update: "delete",
          product: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        dispatch(increseQuantSuccess(response.data.message));
      });
  };
};

export const decreaseQuantSuccess = (message) => {
  return {
    type: DECREASE_QUANTITY,
    payload: message,
  };
};
