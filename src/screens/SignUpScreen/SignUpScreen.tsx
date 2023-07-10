import React from "react";
import "./style.css";

export const SignUp = (): JSX.Element => {
    return (
        <div className="sign-up">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="top-bar">
                        <div className="bars-status-bar">
                            <img className="background" alt="Background" src="background.svg" />
                            <div className="text-wrapper">9:41</div>
                            <img className="status" alt="Status" src="status.png" />
                            <img className="wifi" alt="Wifi" src="wifi.png" />
                            <img className="battery" alt="Battery" src="battery.png" />
                        </div>
                    </div>
                    <img className="home-indicator" alt="Home indicator" src="home-indicator.png" />
                    <div className="overlap-group">
                        <div className="content">
                            <h1 className="h-1">Criar nova conta</h1>
                            <p className="p">Insira seus dados para criar uma conta</p>
                            <p className="text-wrapper-2">Já tem uma conta? Entrar</p>
                        </div>
                        <div className="button">
                            <div className="div">
                                <div className="shadow" />
                                <img className="bg" alt="Bg" src="bg.svg" />
                                <div className="text-wrapper-3">Iniciar</div>
                            </div>
                        </div>
                        <div className="fields">
                            <div className="field">
                                <div className="overlap-group-2">
                                    <div className="text-wrapper-4">Nome completo</div>
                                </div>
                            </div>
                            <div className="overlap-group-wrapper">
                                <div className="overlap-group-2">
                                    <div className="text-wrapper-5">Email</div>
                                    <img className="tick-icn" alt="Tick icn" src="tick-icn.png" />
                                </div>
                            </div>
                            <div className="div-wrapper">
                                <div className="overlap-group-2">
                                    <div className="text-wrapper-5">Senha</div>
                                    <img className="eye-icn" alt="Eye icn" src="eye-icn.png" />
                                </div>
                            </div>
                        </div>
                        <div className="or-sign-up-with">
                            <div className="text-wrapper-6">Ou Inscreva-se com</div>
                            <img className="google" alt="Google" src="google.png" />
                            <img className="facebook" alt="Facebook" src="facebook.png" />
                            <img className="twitter" alt="Twitter" src="twitter.png" />
                        </div>
                    </div>
                    <div className="arw">
                        <div className="overlap-2">
                            <div className="shadow-2" />
                            <div className="bg-2" />
                            <img className="icn" alt="Icn" src="icn.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
