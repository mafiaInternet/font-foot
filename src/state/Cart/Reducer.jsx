import {
  DELETE_ITEM_FROM_CART_REQUEST,
  DELETE_ITEM_FROM_CART_SUCCESS,
  GET_CART_BY_USER_FAILURE,
  GET_CART_BY_USER_REQUEST,
  GET_CART_BY_USER_SUCCESS,
  POST_ITEM_TO_CART_REQUEST,
  POST_ITEM_TO_CART_SUCCESS,
  PUT_ITEM_OF_CART_FAILURE,
  PUT_ITEM_OF_CART_REQUEST,
  PUT_ITEM_OF_CART_SUCCESS,
} from "./ActionType";

const initiaState = {
  cartItems: [],
  loading: null,
  error: null,
};

export const cartReducer = (state = initiaState, action) => {
  switch (action.type) {
    case GET_CART_BY_USER_REQUEST:
      return { ...state, loading: true, cartItems: [], error: null };
    case GET_CART_BY_USER_SUCCESS:
      return { ...state, loading: false, cartItems: action.payload };
    case GET_CART_BY_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case DELETE_ITEM_FROM_CART_REQUEST:
      return { ...state, loading: true, error: null };
    case DELETE_ITEM_FROM_CART_SUCCESS:
      return {
        ...state,
        loading: true,
        cartItems: state.cartItems.filter((item) => item.id != action.payload),
        error: null,
      };
    case PUT_ITEM_OF_CART_REQUEST:
      return { ...state, loading: true, error: null };
    case PUT_ITEM_OF_CART_SUCCESS:
      const cartItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: action.payload.quantity,
              status: action.status,
            }
          : item
      );
      return { ...state, loading: false, cartItems: cartItems, error: null };
    case PUT_ITEM_OF_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case POST_ITEM_TO_CART_REQUEST:
      return { ...state, loading: true, error: null };
    case POST_ITEM_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: state.cartItems.push(action.payload),
        error: null,
      };
    case POST_ITEM_TO_CART_SUCCESS:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
