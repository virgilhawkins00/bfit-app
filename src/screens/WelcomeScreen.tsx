import React from "react";
import "./style.css";

export const Welcome = (): JSX.Element => {
    return (
        <div className="welcome">
            <div className="overlap-wrapper">
                <div className="overlap">
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
                        <img className="logo-vector-bg" alt="Logo vector bg" src="logo-vector-bg.png" />
                        <div className="logo">
                            <div className="vector" />
                            <img className="dot" alt="Dot" src="dot.svg" />
                        </div>
                        <img className="img" alt="Vector" src="vector.png" />
                        <div className="content">
                            <h1 className="h-1">Bem-vindo ao Fit100</h1>
                            <p className="p">Vamos sua nova jornada de saúde e fitness conosco!</p>
                            <div className="div">Já tem conta? Entrar</div>
                        </div>
                        <div className="button">
                            <div className="overlap-group-2">
                                <div className="shadow" />
                                <div className="bg" />
                            </div>
                        </div>
                        <div className="text-wrapper-2">Iniciar</div>
                    </div>
                    <img className="home-indicator" alt="Home indicator" src="home-indicator.png" />
                </div>
            </div>
        </div>
    );
};
