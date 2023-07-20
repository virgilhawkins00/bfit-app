import React from "react";
/*import { HomeIndicator } from "./HomeIndicator"; */
import "./style.css";
import { HomeIndicator } from "react-native-home-indicator";

export const SignIn = (): JSX.Element => {
    return (
        <div className="sign-in">
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
                    <HomeIndicator className="home-indicator-instance" />
                    <div className="content">
                        <p className="n-o-tem-uma-conta">
                            <span className="span">Não tem uma conta? </span>
                            <span className="text-wrapper-2">Inscrever-se</span>
                        </p>
                    </div>
                    <div className="button">
                        <div className="overlap-group">
                            <div className="shadow" />
                            <div className="bg" />
                            <div className="div">Sign In</div>
                        </div>
                    </div>
                    <div className="fields">
                        <div className="field">
                            <div className="overlap-group-2">
                                <div className="text-wrapper-3">Email</div>
                                <img className="tick-icn" alt="Tick icn" src="tick-icn.png" />
                            </div>
                        </div>
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group-2">
                                <div className="text-wrapper-3">Senha</div>
                                <img className="eye-icn" alt="Eye icn" src="eye-icn.png" />
                            </div>
                        </div>
                    </div>
                    <div className="or-sign-up-with">
                        <div className="text-wrapper-4">Or Sign Up with</div>
                        <img className="google" alt="Google" src="google.png" />
                        <img className="facebook" alt="Facebook" src="facebook.png" />
                        <img className="twitter" alt="Twitter" src="twitter.png" />
                    </div>
                    <div className="arw">
                        <div className="overlap-2">
                            <div className="shadow-2" />
                            <div className="bg-2" />
                            <img className="icn" alt="Icn" src="icn.svg" />
                        </div>
                    </div>
                    <div className="logo" />
                </div>
            </div>
        </div>
    );
};
