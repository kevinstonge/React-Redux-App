import * as types from "../actions/actionTypes";
const initialState = {
  listQuery: "future",
  launches: [],
};
export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_LAUNCH:
      console.log("get launch");
      return state;
    case types.GET_LAUNCHES:
      console.log("get launches");
      return state;
    default:
      return state;
  }
}
