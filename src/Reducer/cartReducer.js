import {
  ADD_TO_CART,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
  VIEW_CART,
} from "../ActionTypes/cartActiontype";

const initialState = {
  loading: false,
  cartItems: [],
  error: "",
  message: "",
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_CART:
      return {
        ...state,
        loading: true,
        cartItems: action.payload,
      };

    case ADD_TO_CART:
      return {
        ...state,
        loading: true,
        cartItems: action.payload,
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        loading: true,
        message: action.payload,
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        loading: true,
        message: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
