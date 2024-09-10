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

    const goToIndexPage = () => {
        navigate('/FirstReactProj');
    };

    const goToAboutPage = () => {
        navigate('/FirstReactProj/about');
    };

    const goToHomePage = () => {
        navigate('/FirstReactProj/home');
    };

    const goToAttendancePage = () => {
        navigate('/FirstReactProj/attendance');
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const mobileMenuBlock = () => {
        return (
            <div className="MobileButtons">
                <Padder className="breaker"/>
                <button className="btn" onClick={goToHomePage}>Home</button>
                <Padder className="breaker"/>
                <button className="btn" onClick={goToAttendancePage}>Attendance</button>
                <Padder className="breaker"/>
                <button className="btn" href="/src/assets/CSHS-Logo.png">Messaging</button>
                <Padder className="breaker"/>
                <button className="btn" href="/src/assets/CSHS-Logo.png">Profile</button>
                <Padder className="breaker"/>
            </div>
        );
    }

    const largeMenuBlock = () => {
        return (
            <>
                <button className="btn" onClick={goToHomePage}>Home</button>
                <Padder/>
                <button className="btn" onClick={goToAttendancePage}>Attendance</button>
                <Padder/>
                <button className="btn" href="/src/assets/CSHS-Logo.png">Messaging</button>
                <Padder/>
                <button className="btn" href="/src/assets/CSHS-Logo.png">Profile</button>
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
                                <button onClick={goToIndexPage}>
                                    <img src={LogoImg} id="headerLogo" alt="logo"/>
                                    <h1 id="title">RaptorHub</h1>
                                </button>
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