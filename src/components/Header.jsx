import React, { useState } from 'react';
import './Header.css';
import Spacer from './spacer.jsx';
import Menu from "./Menu.jsx";
import Padder from "./padder.jsx";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`header ${isOpen ? 'open' : ''}`}>
            <div className="minorBlock">
                <Padder />
                <img src="src/assets/CSHS-Logo.png" id="headerLogo" alt="logo"/>
                <h1 id="title">RaptorHub</h1>
                <Spacer />
                <Menu className = "menu" isOpen={isOpen} toggleMenu={() => {toggleMenu(); console.log(isOpen);}} />
                <Padder />
            </div>
        </header>
    );
}

export default Header;