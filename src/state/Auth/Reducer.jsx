import {
  GET_LOGIN_FAILURE,
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
  GET_PROFILE_FAILURE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  LOGOUT,
} from "./ActionType";

const initialState = {
  user: null,
  loading: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGIN_REQUEST:
      return { ...state, loading: true, user: null, error: null };
    case GET_LOGIN_SUCCESS:
      return { ...state, loading: false, jwt: action.payload };
    case GET_LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case GET_PROFILE_REQUEST:
      return { ...state, loading: true, user: null, error: null };
    case GET_PROFILE_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case GET_PROFILE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case LOGOUT:
        return { ...state, loading: true, user: null, error: null };
    default:
        return state
  }
};
