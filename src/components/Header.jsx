import { useState } from 'react';
import './Header.css';
import Spacer from './spacer.jsx';
import Menu from "./Menu.jsx";
import Padder from "./padder.jsx";
import LogoImg from "../assets/CSHS-Logo.png";
import { useNavigate } from 'react-router-dom';
import {isMobile} from "react-device-detect";
import SearchBar from "./SearchBar.jsx";



// eslint-disable-next-line react/prop-types
function Header({menu}) {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const goToAboutPage = () => {
        navigate('/FirstReactProj/about');
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const mobileMenuBlock = () => {
        return (
            <div className="MobileButtons">
                <Padder className="breaker"/>
                <button className="btn" href="/src/assets/CSHS-Logo.png">Home</button>
                <Padder className="breaker"/>
                <button className="btn" onClick={goToAboutPage}>About</button>
                <Padder className="breaker"/>
                <button className="btn" href="/src/assets/CSHS-Logo.png">Contact</button>
                <Padder className="breaker"/>
            </div>
        );
    }

    const largeMenuBlock = () => {
        return (
            <>
                <button className="btn" href="/src/assets/CSHS-Logo.png">Home</button>
                <Padder/>
                <button className="btn" onClick={goToAboutPage}>About</button>
                <Padder/>
                <button className="btn" href="/src/assets/CSHS-Logo.png">Contact</button>
                <Padder/>
            </>
        );
    }

    return (
        <header className={`header ${isOpen ? 'open' : ''}`}>

                { isMobile ? (
                    <>
                        <div className="minorBlock">
                            <Padder/>
                            <a onClick={() => navigate("/FirstReactProj/")}><img src={LogoImg} id="headerLogo" alt="logo"/></a>
                            <a onClick={() => navigate("/FirstReactProj/")}><h1 id="title">RaptorHub</h1></a>
                                <Spacer/>
                                {menu &&
                            <Menu className="menu" isOpen={isOpen} toggleMenu={() => {
                                toggleMenu();
                            }}/>
                            }
                        </div>
                        {menu && mobileMenuBlock()}
                    </>
                ) : (
                    <>
                        <div className="minorBlock">
                            <Padder/>
                            <img src={LogoImg} id="headerLogo" alt="logo"/>
                            <h1 id="title">RaptorHub</h1>
                            <Spacer/>
                            {menu && largeMenuBlock()}
                        </div>
                    </>
                )}
        </header>
                    );
                }

export default Header;