import * as types from "./actionTypes";
import axios from "axios";
export const setStartDate = (newStartDate) => (dispatch) => {
  dispatch({ type: types.SET_START_DATE, payload: newStartDate });
  getLaunches(newStartDate);
};

export const getLaunches = (startDate) => (dispatch) => {
  dispatch({ type: types.GET_LAUNCHES });
  axios
    .get(`https://launchlibrary.net/1.3/launch/${startDate}`)
    .then((r) => {
      dispatch({
        type: types.GOT_LAUNCHES,
        payload: { launches: r.data.launches, total: r.data.total },
      });
    })
    .catch((e) => {
      dispatch({ type: types.GOT_ERROR, payload: "error getting launch data" });
    });
};

export const getMoreLaunches = (startDate, offset) => (dispatch) => {
  dispatch({ type: types.GET_MORE_LAUNCHES });
  axios
    .get(`https://launchlibrary.net/1.3/launch/${startDate}?offset=${offset}`)
    .then((r) => {
      dispatch({
        type: types.GOT_MORE_LAUNCHES,
        payload: { launches: r.data.launches },
      });
    })
    .catch((e) =>
      dispatch({ type: types.GOT_ERROR, payload: "error getting launch data" })
    );
};

//fetch launches between two dates:
//https://launchlibrary.net/1.3/launch/2020-09-22/2020-12-30
//or just all on or after a date:
// https://launchlibrary.net/1.3/launch/2020-09-22
//returns array of lauch objects, followed by total: n, offest: n, count: n (for pagination, offset is which page)
//https://launchlibrary.net/1.3/launch/2020-09-22/2020-12-30?offset=1
//fetch launches between two dates for specific launch service provider (need to get list of providers to find lsp, also listed in launch details):
//https://launchlibrary.net/1.3/launch/2020-09-22/2020-12-30?lsp=121
