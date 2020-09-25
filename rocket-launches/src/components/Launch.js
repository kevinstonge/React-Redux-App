import React, { useEffect, useState } from "react";
import "./Launch.scss";
export default function Launch(props) {
  const [countdown, setCountdown] = useState("...loading...");
  const deltaTString = (launchNet) => {
    const now = new Date();
    const deltaT = now - launchNet;
    const structure = {
      d: 60 * 60 * 24,
      h: 60 * 60,
      m: 60,
      s: 1,
    };
    let outputString = deltaT > 0 ? "T+: " : "T-: ";
    let remainder = Math.abs(deltaT / 1000);
    Object.entries(structure).forEach(([unit, factor]) => {
      let quantity = Math.floor(remainder / factor);
      remainder -= quantity * factor;
      quantity = quantity.toString().length === 1 ? `0${quantity}` : quantity;
      outputString += `${quantity}${unit} `;
    });
    return outputString;
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setCountdown(deltaTString(new Date(props.launch.net)));
    }, 1000);
    return () => clearTimeout(timer);
  }, [countdown, props.launch.net]);
  return (
    <div className="launchCard">
      <div className="header">
        <span className="lsp-abbrev">{props.launch.lsp.abbrev}</span>{" "}
        {props.launch.name}
      </div>
      <div className="body">
        <p className="launch-countdown">{countdown}</p>
        <p>NET: {props.launch.net}</p>
        <p>
          Provider: {props.launch.lsp.name} ({props.launch.lsp.abbrev})
        </p>
        {props.launch.missions.map((mission) => (
          <p key={`${props.launch.id}-${mission.id}`}>
            mission description: {mission.description}
          </p>
        ))}
      </div>
    </div>
  );
}
