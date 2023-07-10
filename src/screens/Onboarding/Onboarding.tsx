import React from "react";
import "./style.css";

export const Onboarding = (): JSX.Element => {
    return (
        <div className="onboarding">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <div className="top-bar">
                    </div>
                    <div className="overlap">
                        <img className="logo-vector-bg" alt="Logo vector bg" src="logo-vector-bg.png" />
                        <div className="content">
                            <div className="div">Skip</div>
                            <h1 className="h-1">Tempo</h1>
                            <p className="p">Não perca seu tempo e comece sua jornada</p>
                        </div>
                        <img className="vector" alt="Vector" src="vector.png" />
                    </div>
                    <img className="slide" alt="Slide" src="slide.png" />
                </div>
            </div>
        </div>
    );
};
