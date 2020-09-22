import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getLaunches } from "./actions/actions";
import Header from "./components/Header";
import "./App.scss";
import Toolbar from "./components/Toolbar";
import LaunchList from "./components/LaunchList";

function App(props) {
  const startDate = props.startDate;
  const getLaunches = props.getLaunches;
  useEffect(() => {
    getLaunches(startDate);
  }, [getLaunches, startDate]);
  return (
    <div className="App">
      <Header />
      <Toolbar />
      <LaunchList />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    startDate: state.startDate,
    launches: state.launches,
  };
};
export default connect(mapStateToProps, { getLaunches })(App);
