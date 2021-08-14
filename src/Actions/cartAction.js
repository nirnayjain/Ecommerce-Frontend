import axios from "axios";
import { useDispatch } from "react-redux";
import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  DELETE_USER_CART,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
  VIEW_CART,
} from "../ActionTypes/cartActiontype";
import { API } from "../API";

const token = localStorage.getItem("token");

export const viewCart = () => {
  let totalPrice = 0;
  let totalQuantity = 0;
  return function (dispatch) {
    axios
      .get(`${API}/api/cart/view_cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        response.data.cartItems.map((item) => {
          totalPrice += item.product.sale_price * 1 * item.quantity * 1;
          totalQuantity += item.quantity * 1;
        });
        const cartItems = response.data;
        dispatch(viewCartSuccess(cartItems, totalPrice, totalQuantity));
      });
  };
};

export const viewCartSuccess = (dataItems, totalPrice, totalQuantity) => {
  return {
    type: VIEW_CART,
    payload: dataItems,
    totalPrice,
    totalQuantity,
  };
};

export const addToCart = (id) => {
  let totalPrice = 0;
  let totalQuantity = 0;

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
        response.data.data.cartItems.map((item) => {
          totalPrice += item.product.sale_price * 1 * item.quantity * 1;
          totalQuantity += item.quantity * 1;
        });
        dispatch(
          addToCartSuccess(response.data.message, totalPrice, totalQuantity)
        );
      });
  };
};

export const addToCartSuccess = (message, totalPrice, totalQuantity) => {
  return {
    type: ADD_TO_CART,
    payload: message,
    totalPrice,
    totalQuantity,
  };
};

export const removeFromCart = (id) => {
  let totalPrice = 0;
  let totalQuantity = 0;
  return function (dispatch) {
    axios
      .delete(`${API}/api/cart/remove_product/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        response.data.cart?.cartItems.map((item) => {
          totalPrice += item.product.sale_price * 1 * item.quantity * 1;
          totalQuantity += item.quantity * 1;
        });
        dispatch(
          removeFromCartSuccess(
            response.data.message,
            totalPrice,
            totalQuantity
          )
        );
      });
  };
};

export const removeFromCartSuccess = (message, totalPrice, totalQuantity) => {
  return {
    type: REMOVE_FROM_CART,
    payload: message,
    totalPrice,
    totalQuantity,
  };
};

export const increseQuant = (id) => {
  let totalPrice = 0;
  let totalQuantity = 0;
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
        response.data.cart.cartItems.map((item) => {
          console.log(item);
          totalPrice += item.product.sale_price * 1 * item.quantity * 1;
          totalQuantity += item.quantity * 1;
        });
        dispatch(
          increseQuantSuccess(response.data.message, totalPrice, totalQuantity)
        );
      });
  };
};

export const increseQuantSuccess = (message, totalPrice, totalQuantity) => {
  return {
    type: INCREASE_QUANTITY,
    payload: message,
    totalPrice,
    totalQuantity,
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

export const delteUserCart = () => {
  return {
    type: DELETE_USER_CART,
    payload: "",
  };
};
