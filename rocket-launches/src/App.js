import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getLaunches, getLaunch } from "./actions/actions";
import "./App.scss";

function App(props) {
  useEffect(() => {
    props.getLaunches();
  }, [props]);
  return (
    <div className="App">
      <p>launches {props.listQuery}</p>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    listQuery: state.listQuery,
    launches: state.launches,
  };
};
export default connect(mapStateToProps, { getLaunch, getLaunches })(App);
