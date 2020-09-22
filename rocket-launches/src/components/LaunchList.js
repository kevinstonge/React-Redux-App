import React from "react";
import { connect } from "react-redux";
const LaunchList = (props) => {
  return (
    <>
      {props.launches.map((launch) => {
        return <p>{launch.name}</p>;
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    launches: state.launches,
  };
};
export default connect(mapStateToProps, {})(LaunchList);
