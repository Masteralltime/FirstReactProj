// eslint-disable-next-line no-unused-vars
import React from 'react';
import './SignupField.css'
import {useNavigate} from "react-router-dom";
import Padder from "./padder.jsx";
import {register} from "../backend_handler/BackendInterface.jsx";

// eslint-disable-next-line react/prop-types
function SignupField() {

    const navigate = useNavigate();

    return (
        <>
            <form className="signup-formBackground" >
                <h1 className="signupHeader">Sign Up</h1>

                    <input className="signup-input" name="username" placeholder="Username"/>
                    <div className="nameBoxes">
                        <input className="signup-input" name="firstName" placeholder="First Name"/>
                        <Padder/>
                        <input className="signup-input" name="lastName" placeholder="Last Name"/>
                    </div>
                    <input className="signup-input" name="email" placeholder="Email"/>
                    <input className="signup-input" name="password" placeholder="Password"/>
                    <input className="signup-input" name="passwordRetyped" placeholder="Retype Password"/>
                    <button className="signup-submitBtn" type="submit">
                        Submit
                        <svg fill="white" viewBox="0 0 448 512" height="1em" className="arrow">
                            <path
                                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                        </svg>
                    </button>

                <p1 className = "bottomText">Already have an account? Log in <a className="toLoginLink" onClick={() => navigate("/FirstReactProj/Login")}>here</a>.</p1>

            </form>
        </>
    );
}

export default SignupField;