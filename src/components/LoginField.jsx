// eslint-disable-next-line no-unused-vars
import React from 'react';
import './LoginField.css';
import {useNavigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
function LoginField() {

    const navigate = useNavigate();

    return (
        <>
            <div className="formBackground">
                <div><h1 className="LoginHeader">Log In</h1></div>
                <input className="input" placeholder="Username"/>
                <input className="input" placeholder="Password"/>
                <button className="submitBtn">
                    Submit
                    <svg fill="white" viewBox="0 0 448 512" height="1em" className="arrow">
                        <path
                            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                    </svg>
                </button>

                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p1 className = "bottomText">Don't have an account? Register <a className="toSigninLink" onClick={() => navigate("/FirstReactProj/Signup")}>here</a>.</p1>

            </div>
        </>
    );
}

export default LoginField;