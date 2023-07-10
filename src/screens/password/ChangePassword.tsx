import React from "react";
import "./style.css";

export const ChangePassword = (): JSX.Element => {
    return (
        <div className="change-password">
            <div className="div-wrapper">
                <div className="overlap-2">
                    <div className="top-bar">
                        <div className="bars-status-bar">
                            <img className="background" alt="Background" src="background.svg" />
                            <div className="text-wrapper">9:41</div>
                            <img className="status" alt="Status" src="status.png" />
                            <img className="wifi" alt="Wifi" src="wifi.png" />
                            <img className="battery" alt="Battery" src="battery.png" />
                        </div>
                    </div>
                    
                    <div className="content">
                        <div className="text-wrapper-3">Insira a nova senha</div>
                    </div>
                    <div className="title">
                        <div className="text-wrapper-4">Alterar a senha</div>
                    </div>
                    <div className="arw">
                        <div className="overlap-4">
                            <div className="shadow-2" />
                            <div className="bg-2" />
                            <img className="icn" alt="Icn" src="icn.svg" />
                        </div>
                    </div>
                    <div className="fields">
                        <div className="field">
                            <div className="overlap-group-2">
                                <div className="text-wrapper-5">Senha atual</div>
                                <img className="eye-icn" alt="Eye icn" src="eye-icn.png" />
                            </div>
                        </div>
                        <div className="field-2">
                            <div className="overlap-group-2">
                                <div className="text-wrapper-5">Nova Senha</div>
                                <img className="eye-icn" alt="Eye icn" src="image.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
