import {
  GET_START_REPO,
  GET_SUCCESS_REPO,
  GET_FILED_REPO,
  GET_START_USER,
  GET_SUCCESS_USER,
  GET_FILED_USER,
} from "../action-types/actionTypes";
import { axiosInstance } from "../../api/api.config";

export const reposActionCreator = (userName) => {
  return async (dispatch) => {
    dispatch({
      type: GET_START_REPO,
    });
    try {
      const response = await axiosInstance.get(`/users/${userName}/repos`);
      console.log("response", response);
      dispatch({
        type: GET_SUCCESS_REPO,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: GET_FILED_REPO,
        payload: e,
      });
    }
  };
};

export const userDataActionCreator = (userName) => {
  return async (dispatch) => {
    dispatch({
      type: GET_START_USER,
    });
    try {
      const response = await axiosInstance.get(`/users/${userName}`);
      dispatch({
        type: GET_SUCCESS_USER,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: GET_FILED_USER,
        payload: e,
      });
    }
  };
};
