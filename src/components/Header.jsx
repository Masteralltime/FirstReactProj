import './Header.css';
import Spacer from './spacer.jsx';


function Header() {
    return (
        <header>
            <img src="src/assets/CSHS-Logo.png" id="headerLogo" alt="logo"/>
            <h1 id="title">My Blog</h1>
            <Spacer />
        </header>
    );
}

export default Header;