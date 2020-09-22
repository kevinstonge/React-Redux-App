import React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
export default function Header(props) {
  return (
    <header>
      <FontAwesomeIcon icon={faRocket} />
      <h1>Rocket Launches</h1>
      <FontAwesomeIcon icon={faRocket} />
    </header>
  );
}
