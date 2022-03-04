import React from "react";
import "./IconButton.css";

const IconButton = ({ handleClick, text }) => {
  return (
    <div className="IconButton" onClick={handleClick}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span>{text}</span>
      </div>
    </div>
  );
};

export default IconButton;
