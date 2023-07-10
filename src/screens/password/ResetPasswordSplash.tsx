import React from "react";
import "./style.css";

export const ResetPassword = (): JSX.Element => {
    return (
        <div className="reset-password">
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

                    <div className="button">
                        <div className="overlap-3">
                            <div className="shadow" />
                            <div className="bg" />
                            <div className="text-wrapper-2">Change</div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="text-wrapper-3">Enter new password</div>
                    </div>
                    <div className="title">
                        <div className="text-wrapper-4">Change Password</div>
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
                                <div className="text-wrapper-5">Current Password</div>
                                <img className="eye-icn" alt="Eye icn" src="eye-icn.png" />
                            </div>
                        </div>
                        <div className="field-2">
                            <div className="overlap-group-2">
                                <div className="text-wrapper-5">New Password</div>
                                <img className="eye-icn" alt="Eye icn" src="image.png" />
                            </div>
                        </div>
                    </div>
                    <div className="popup">
                        <div className="overlap-5">
                            <img className="key-vector" alt="Key vector" src="key-vector.png" />
                            <div className="content-2">
                                <div className="text-wrapper-6">Sua senha foi alterada!</div>
                            </div>
                            <div className="button-2">
                                <div className="overlap-group-3">
                                    <img className="img" alt="Bg" src="bg.svg" />
                                    <div className="text-wrapper-7">Feito</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
