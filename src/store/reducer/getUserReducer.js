import {
  GET_START_USER,
  GET_SUCCESS_USER,
  GET_FILED_USER,
} from "../action-types/actionTypes";

const initialState = {
  loading: false,
  userData: [],
  error: "",
};

export function getUserReducer(state = initialState, action) {
  switch (action.type) {
    case GET_START_USER:
      return {
        ...state,
        loading: true,
        userData: [],
        error: "",
      };
    case GET_SUCCESS_USER:
      return {
        ...state,
        loading: false,
        userData: action.payload,
      };
    case GET_FILED_USER:
      return {
        ...state,
        loading: false,
        userData: [],
        error: action.payload ? action.payload.message : "something went wrong",
      };
    default:
      return state;
  }
}
