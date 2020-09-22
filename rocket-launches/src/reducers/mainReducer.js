import * as types from "../actions/actionTypes";
const initialState = {
  loadingMessage: "",
  startDate: new Date().toLocaleDateString("en-CA"),
  launches: [],
};
export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_START_DATE:
      return {
        ...state,
        launches: [],
        startDate: action.payload,
        loadingMessage: "... getting launch data ...",
      };
    case types.GET_LAUNCHES:
      return {
        ...state,
        launches: action.payload.launches,
        loadingMessage: "",
      };
    default:
      return state;
  }
}
