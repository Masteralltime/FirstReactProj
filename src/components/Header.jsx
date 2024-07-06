import React, { useState } from 'react';
import './Header.css';
import Spacer from './spacer.jsx';
import Menu from "./Menu.jsx";
import Padder from "./padder.jsx";
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const goToAboutPage = () => {
        navigate('/about');
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`header ${isOpen ? 'open' : ''}`}>
            <div className="minorBlock">
                <Padder/>
                <img src="src/assets/CSHS-Logo.png" id="headerLogo" alt="logo"/>
                <h1 id="title">RaptorHub</h1>
                <Spacer/>
                <button className="btn" href="src/assets/CSHS-Logo.png">Home</button>
                <Padder/>
                <button className="btn" onClick={goToAboutPage}>About</button>
                <Padder/>
                <button className="btn" href="src/assets/CSHS-Logo.png">Contact</button>
                <Padder/>
                <Menu className="menu" isOpen={isOpen} toggleMenu={() => {
                    toggleMenu();
                }}/>
                <Padder/>
            </div>
        </header>
    );
}

export default Header;