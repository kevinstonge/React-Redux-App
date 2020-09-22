import * as types from "./actionTypes";
export const getLaunches = () => (dispatch) => {
  dispatch({ type: types.GET_LAUNCHES });
  //fetch launches between two dates:
  //https://launchlibrary.net/1.3/launch/2020-09-22/2020-12-30
  //returns array of lauch objects, followed by total: n, offest: n, count: n (for pagination, offset is which page)
  //https://launchlibrary.net/1.3/launch/2020-09-22/2020-12-30?offset=1

  //fetch launches between two dates for specific launch service provider (need to get list of providers to find lsp, also listed in launch details):
  //https://launchlibrary.net/1.3/launch/2020-09-22/2020-12-30?lsp=121
};
export const getLaunch = () => (dispatch) => {
  dispatch({ type: types.GET_LAUNCH });
};
