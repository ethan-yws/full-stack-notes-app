import React from "react";
import Timer from "../timer/Timer";
import Weather from "../weather/Weather";
import "./RightHeader.css";
import CreateIcon from "@material-ui/icons/Create";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import SaveIcon from "@material-ui/icons/Save";

function RightHeader() {
    return (
        <div className="right-header-container">
            <div className="tools">
                <CreateIcon />
                <DeleteForeverIcon />
                <SaveIcon />
            </div>
            <div className="widgets">
                <div className="weather-widget">
                    <Weather />
                </div>
                <div className="clock-widget">
                    <Timer />
                </div>
            </div>
        </div>
    );
}

export default RightHeader;
