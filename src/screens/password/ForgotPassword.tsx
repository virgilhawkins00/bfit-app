import React from "react";
import "./style.css";

export const ForgotPassword = (): JSX.Element => {
    return (
        <div className="forgot-password">
            <div className="overlap-wrapper">
                <div className="overlap">
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
                    
                    <div className="field">
                        <div className="overlap-group">
                            <div className="email"> Email</div>
                            <img className="tick-icn" alt="Tick icn" src="tick-icn.png" />
                        </div>
                    </div>
                    <div className="button">
                        <div className="div">
                            <div className="shadow" />
                            <div className="bg" />
                            <div className="text-wrapper-2">Enviar</div>
                        </div>
                    </div>
                    <div className="content">
                        <p className="p">
                            Por favor, indique o seu endereço de e-mail. Você receberá um link para criar uma nova senha por e-mail.
                        </p>
                    </div>
                    <div className="title">
                        <div className="text-wrapper-3">Esqueceu sua senha</div>
                    </div>
                    <div className="arw">
                        <div className="overlap-2">
                            <div className="shadow-2" />
                            <div className="bg-2" />
                            <img className="icn" alt="Icn" src="icn.svg" />
                        </div>
                    </div>
                    <div className="keyboards-iphone-XS">
                        <img className="iphone-XS-keyboards" alt="Iphone XS keyboards" src="numpad-background.svg" />
                        <div className="overlap-3">
                            <div className="keyboard-numpad">
                                <div className="overlap-4">
                                    <img className="keys" alt="Keys" src="keys.png" />
                                    <div className="element">
                                        <div className="div-wrapper">
                                            <div className="text-wrapper-4">0</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="overlap-group-wrapper">
                                    <div className="overlap-5">
                                        <div className="text-wrapper-5">WXYZ</div>
                                        <div className="text-wrapper-6">9</div>
                                    </div>
                                </div>
                                <div className="element-2">
                                    <div className="overlap-6">
                                        <div className="text-wrapper-7">TUV</div>
                                        <div className="text-wrapper-6">8</div>
                                    </div>
                                </div>
                                <div className="element-3">
                                    <div className="overlap-7">
                                        <div className="text-wrapper-8">PQRS</div>
                                        <div className="text-wrapper-6">7</div>
                                    </div>
                                </div>
                                <div className="element-4">
                                    <div className="overlap-8">
                                        <div className="text-wrapper-9">MNO</div>
                                        <div className="text-wrapper-6">6</div>
                                    </div>
                                </div>
                                <div className="element-5">
                                    <div className="overlap-9">
                                        <div className="text-wrapper-10">JKL</div>
                                        <div className="text-wrapper-6">5</div>
                                    </div>
                                </div>
                                <div className="element-6">
                                    <div className="overlap-10">
                                        <div className="text-wrapper-11">GHI</div>
                                        <div className="text-wrapper-6">4</div>
                                    </div>
                                </div>
                                <div className="element-7">
                                    <div className="overlap-11">
                                        <div className="text-wrapper-12">DEF</div>
                                        <div className="text-wrapper-13">3</div>
                                    </div>
                                </div>
                                <div className="element-8">
                                    <div className="overlap-12">
                                        <div className="text-wrapper-14">ABC</div>
                                        <div className="text-wrapper-13">2</div>
                                    </div>
                                </div>
                                <div className="element-9">
                                    <div className="overlap-13">
                                        <div className="text-wrapper-13">1</div>
                                    </div>
                                </div>
                            </div>
                            <img className="home-indicator-2" alt="Home indicator" src="home-indicator.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
