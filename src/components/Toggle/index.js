import React from "react";
import style from "./Toggle.module.css";

const Toggle = props => {
    return (
        <div
            onClick={props.onClick}
            className={`${style.container} ${props.isOn ? style.active : ""}`}
        >
            <div className={style.switch} />
        </div>
    );
};

export default Toggle;
