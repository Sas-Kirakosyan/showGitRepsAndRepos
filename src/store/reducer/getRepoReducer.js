import {
  GET_START_REPO,
  GET_SUCCESS_REPO,
  GET_FILED_REPO,
} from "../action-types/actionTypes";

const initialState = {
  loading: false,
  repoData: [],
  error: "",
};

export function getRepoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_START_REPO:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case GET_SUCCESS_REPO:
      return {
        ...state,
        loading: false,
        repoData: action.payload,
      };
    case GET_FILED_REPO:
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
