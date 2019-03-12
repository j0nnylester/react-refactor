import React from "react";

import "./Toggle.css";

const Toggle = props => {
    return (
        <div
            onClick={props.onClick}
            className={`container ${props.isOn ? "active" : ""}`}
        >
            <div className="switch" />
        </div>
    );
};

export default Toggle;
