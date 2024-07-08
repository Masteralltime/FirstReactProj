import { useState } from 'react';
import './Header.css';
import Spacer from './spacer.jsx';
import Menu from "./Menu.jsx";
import Padder from "./padder.jsx";
import LogoImg from "../assets/CSHS-Logo.png";
import { useNavigate } from 'react-router-dom';
import {isMobile} from "react-device-detect";

function Header() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const goToAboutPage = () => {
        navigate('/FirstReactProj/about');
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`header ${isOpen ? 'open' : ''}`}>
            <div className="minorBlock">
                <Padder/>
                <img src={LogoImg} id="headerLogo" alt="logo"/>
                <h1 id="title">RaptorHub</h1>
                <Spacer/>
                { isMobile ? (
                    <>
                        <Menu className="menu" isOpen={isOpen} toggleMenu={() => {toggleMenu();}}/>
                        <Padder/>
                    </>
                ) : (
                    <>
                        <button className="btn" href="/src/assets/CSHS-Logo.png">Home</button>
                        <Padder/>
                        <button className="btn" onClick={goToAboutPage}>About</button>
                        <Padder/>
                        <button className="btn" href="/src/assets/CSHS-Logo.png">Contact</button>
                        <Padder/>
                    </>
                )}

            </div>
        </header>
    );
}

export default Header;