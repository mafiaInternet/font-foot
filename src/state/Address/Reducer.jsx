import {
  DELETE_ADDRESS_FAILURE,
  DELETE_ADDRESS_REQUEST,
  DELETE_ADDRESS_SUCCESS,
  FIND_ADDRESS_BY_ID_FAILURE,
  FIND_ADDRESS_BY_ID_REQUEST,
  FIND_ADDRESS_BY_ID_SUCCESS,
  GET_ADDRESS_FAILURE,
  GET_ADDRESS_REQUEST,
  GET_ADDRESS_SUCCESS,
  POST_ADDRESS_FAILURE,
  POST_ADDRESS_REQUEST,
  POST_ADDRESS_SUCCESS,
  PUT_ADDRESS_FAILURE,
  PUT_ADDRESS_REQUEST,
  PUT_ADDRESS_SUCCESS,
} from "./ActionType";

const initialState = {
  address: null,
  addresses: [],
  loading: null,
  error: null,
};

export const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADDRESS_REQUEST:
      return { ...state, loading: true, error: null, addresses: [] };
    case GET_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
        address: action.payload.find((item) => item.status == 1),
        addresses: action.payload,
      };
    case GET_ADDRESS_FAILURE:
      return { ...state, loading: true, error: action.payload };
    case DELETE_ADDRESS_REQUEST:
      return { ...state, loading: true, error: null };
    case DELETE_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: true,
        addresses: state.addresses.filter((item) => item.id != action.payload),
        error: null,
      };
    case DELETE_ADDRESS_FAILURE:
      return { ...state, loading: true, error: action.payload };
    case FIND_ADDRESS_BY_ID_REQUEST:
      return { ...state, loading: true, error: null, address: null};
    case FIND_ADDRESS_BY_ID_SUCCESS:
      return {...state, loading: false, error: null, address: action.payload}
    case FIND_ADDRESS_BY_ID_FAILURE:
      return {...state, loading: false, error: action.payload}
    case PUT_ADDRESS_REQUEST:
      return { ...state, loading: true, error: null };
    case PUT_ADDRESS_SUCCESS:
      return {...state, loading: false, error: null};
    case PUT_ADDRESS_FAILURE:
      return {...state, loading: false, error: null};
    case POST_ADDRESS_REQUEST:
      return { ...state, loading: true, error: null };
    case POST_ADDRESS_SUCCESS:
      state.addresses.push(action.payload)
      console.log(action.payload)
      console.log(state.addresses)
      return {...state, loading: false, error: null}
    case POST_ADDRESS_FAILURE:
      return {...state, loading: false, error: action.payload}
    default:
      return state;
  }
};
