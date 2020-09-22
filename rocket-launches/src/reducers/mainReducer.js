import * as types from "../actions/actionTypes";
const initialState = {
  loadingMessage: "",
  errorMessage: "",
  startDate: new Date().toLocaleDateString("en-CA"),
  launches: [],
  totalLaunches: 0,
};
export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_START_DATE:
      return {
        ...state,
        launches: [],
        totalLaunches: 0,
        startDate: action.payload,
        loadingMessage: "",
        errorMessage: "",
      };
    case types.GET_LAUNCHES:
      return {
        ...state,
        errorMessage: "",
        loadingMessage: "... getting launch data ...",
      };
    case types.GOT_LAUNCHES:
      return {
        ...state,
        launches: action.payload.launches,
        totalLaunches: action.payload.total,
        errorMessage: "",
        loadingMessage: "",
      };
    case types.GET_MORE_LAUNCHES:
      return {
        ...state,
        errorMessage: "",
        loadingMessage: "... getting more launch data ...",
      };
    case types.GOT_MORE_LAUNCHES:
      return {
        ...state,
        errorMessage: "",
        launches: [...state.launches, ...action.payload.launches],
      };
    case types.GOT_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
