import React from "react";
import "./style.css";

export const Splash = (): JSX.Element => {
    return (
        <div className="splash">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <div className="top-bar">
                        <div className="bars-status-bar">
                            <img className="background" alt="Background" src="background.svg" />
                            <div className="text-wrapper">9:41</div>
                            <img className="status" alt="Status" src="status.png" />
                            <img className="wifi" alt="Wifi" src="wifi.png" />
                            <img className="battery" alt="Battery" src="battery.png" />
                        </div>
                    </div>
                    <div className="logo" />
                    <img className="vector-logo-bg" alt="Vector logo bg" src="vector-logo-bg.png" />
                </div>
            </div>
        </div>
    );
};
