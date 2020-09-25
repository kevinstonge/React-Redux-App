import React, { useState, useRef, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { getMoreLaunches, gotAllLaunches } from "../actions/actions";
import Launch from "./Launch";
import "./LaunchList.scss";
const LaunchList = (props) => {
  const [isFetching, setIsFetching] = useState(false);
  const scrollBoxLastChild = useRef(null);
  const fetchMoreLaunches = useCallback(() => {
    if (!isFetching) {
      const top = scrollBoxLastChild.current.getBoundingClientRect().top;
      const winHeight = window.innerHeight;
      if (
        top < winHeight &&
        !isFetching &&
        props.totalLaunches > props.launches.length
      ) {
        setIsFetching(true);
        props.getMoreLaunches(props.startDate, props.launches.length); //
        setTimeout(() => {
          setIsFetching(false);
        }, 1000);
      } else if (props.launches.length >= props.totalLaunches) {
        props.gotAllLaunches();
      }
    }
  }, [isFetching, props]);
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchMoreLaunches();
    }, 1000);
    return () => clearTimeout(timer);
  }, [fetchMoreLaunches]);
  return (
    <div className="launchList" onScroll={fetchMoreLaunches}>
      {props.launches.map((launch) => {
        return (
          <Launch key={launch.id} launch={launch}>
            {launch.name}
          </Launch>
        );
      })}
      <div className="loadingMore" ref={scrollBoxLastChild}>
        {props.loadingMessage}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    launches: state.launches,
    startDate: state.startDate,
    totalLaunches: state.totalLaunches,
    loadingMessage: state.loadingMessage,
  };
};
export default connect(mapStateToProps, { getMoreLaunches, gotAllLaunches })(
  LaunchList
);
