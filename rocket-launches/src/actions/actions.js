import * as types from "./actionTypes";
export const getLaunches = () => (dispatch) => {
  dispatch({ type: types.GET_LAUNCHES });
};
export const getLaunch = () => (dispatch) => {
  dispatch({ type: types.GET_LAUNCH });
};
