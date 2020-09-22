import React from "react";
import "./Launch.scss";
export default function Launch(props) {
  return (
    <div className="launchCard">
      <div className="header">{props.launch.name}</div>
      <div className="body">
        <div className="left">
          <img
            src={`${props.launch.rocket.imageURL}`}
            alt={props.launch.rocket.name}
          />
        </div>
        <div className="right">
          <p>Launch No Earlier Than: {props.launch.net}</p>
          <p>
            Launch Service Provider: {props.launch.lsp.name} (
            {props.launch.lsp.abbrev})
          </p>
          {props.launch.missions.map((mission) => (
            <p key={`${props.launch.id}-${mission.id}`}>
              mission description: {mission.description}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
