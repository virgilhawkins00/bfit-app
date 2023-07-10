import React from "react";
import "./style.css";

export const Onboarding = (): JSX.Element => {
    return (
        <div className="onboarding">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <div className="background" />
                    <div className="top-bar">
                        <div className="bars-status-bar">
                            <img className="img" alt="Background" src="background.svg" />
                            <div className="text-wrapper">9:41</div>
                            <img className="status" alt="Status" src="status.png" />
                            <img className="wifi" alt="Wifi" src="wifi.png" />
                            <img className="battery" alt="Battery" src="battery.png" />
                        </div>
                    </div>
                    <img className="logo-vector-bg" alt="Logo vector bg" src="logo-vector-bg.png" />
                    <div className="content">
                        <div className="div">Skip</div>
                        <h1 className="h-1">Treinador</h1>
                        <p className="p">Contrate um personal trainer para ajudar a atingir seus objetivos</p>
                    </div>
                    <img className="vector" alt="Vector" src="vector.png" />
                    <img className="slide" alt="Slide" src="slide.png" />
                </div>
            </div>
        </div>
    );
};
