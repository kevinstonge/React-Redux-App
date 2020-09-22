import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getLaunches, getLaunch } from "./actions/actions";
import Header from "./components/Header";
import "./App.scss";
import Toolbar from "./components/Toolbar";

function App(props) {
  useEffect(() => {
    props.getLaunches();
  }, [props]);
  return (
    <div className="App">
      <Header />
      <Toolbar />
      {/* toolbar: date range selector - lsp selector (?) */}
      {/* launch list with mini-launch info component */}
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
