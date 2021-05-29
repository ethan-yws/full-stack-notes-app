import React, { useState, useEffect } from "react";
import "./Timer.css";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const defaultTime = new Date();
const defaultTimeStr = `${weekdays[defaultTime.getDay()]} ${
    defaultTime.getHours() > 12
        ? defaultTime.getHours() - 12
        : defaultTime.getHours()
}:${defaultTime.getMinutes()} ${defaultTime.getHours() >= 12 ? "pm" : "am"}`;

function Timer() {
    const [clock, setClock] = useState(() => defaultTimeStr);

    // Update the time per minute in 12 hours format
    useEffect(() => {
        setInterval(() => {
            let time = new Date();
            setClock(
                `${weekdays[time.getDay()]} ${
                    time.getHours() > 12
                        ? time.getHours() - 12
                        : time.getHours()
                }:${time.getMinutes()} ${time.getHours() >= 12 ? "pm" : "am"}`
            );
        }, 60000);
    }, []);

    return (
        <div className="timer">
            <span className="timer__digits">{clock}</span>
        </div>
    );
}

export default Timer;
