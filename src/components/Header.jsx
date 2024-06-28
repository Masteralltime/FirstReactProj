import './Header.css'
import HighlightButton from "./HighlightButton.jsx";

function Header() {
    return (
        <header>
            <img src="src/assets/CSHS-Logo.png" id="headerLogo" alt="logo"/>
            <h1 id="title">My Blog</h1>
            <spacer />
            <HighlightButton text={"Sign Up"} />
            <HighlightButton text={"Log In"} />
        </header>
    );
}

export default Header;