import React, { useState } from "react";
import { connect } from "react-redux";
import Launch from "./Launch";
import "./LaunchList.scss";
const LaunchList = (props) => {
  const [isFetching, setIsFetching] = useState(false);

  const onScroll = (e) => {
    if (!isFetching) {
      e.persist();
      const scrollHeight = e.target.scrollHeight;
      const scrollTop = e.target.scrollTop;
      const offsetHeight = e.target.offsetHeight;
    }
  };
  return (
    <div className="launchList" onScroll={onScroll}>
      {props.launches.map((launch) => {
        return (
          <Launch key={launch.id} launch={launch}>
            {launch.name}
          </Launch>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    launches: state.launches,
  };
};
export default connect(mapStateToProps, {})(LaunchList);
