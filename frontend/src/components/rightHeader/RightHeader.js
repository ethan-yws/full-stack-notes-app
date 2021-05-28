import React from "react";
import Timer from "../timer/Timer";
import Weather from "../weather/Weather";
import "./RightHeader.css";
import CreateIcon from "@material-ui/icons/Create";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import SyncIcon from "@material-ui/icons/Sync";
import IconButton from "@material-ui/core/IconButton";

function RightHeader() {
    return (
        <div className="right-header-container">
            <div className="tools">
                <IconButton>
                    <CreateIcon />
                </IconButton>
                <IconButton>
                    <DeleteForeverIcon />
                </IconButton>
                <IconButton>
                    <SyncIcon />
                </IconButton>
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
