import React from "react";
import "./Toolbar.scss";
import { setStartDate } from "../actions/actions";
import { connect } from "react-redux";

function Toolbar(props) {
  const handleChange = (e) => {
    e.persist();
    props.setStartDate(e.target.value);
  };
  return (
    <div className="toolbar">
      <label htmlFor="startDate">
        show launches on or after:{" "}
        <input
          type="date"
          id="startDate"
          value={props.startDate}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    startDate: state.startDate,
  };
};
export default connect(mapStateToProps, { setStartDate })(Toolbar);
