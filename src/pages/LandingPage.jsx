import HighlightButton from "../components/HighlightButton.jsx";
import Padder from "../components/padder.jsx";
import Wallpaper from "../components/Wallpaper.jsx";
import Header from "../components/Header.jsx";
import "./LandingPage.css"
import {useNavigate} from "react-router-dom";


function LandingPage() {

    const navigate = useNavigate();

    return (

        <div className="App">
            <Header className="header" menu = {true}/>
            <Wallpaper className="wallpaper"/>
            <div className="container">
                <HighlightButton text="Sign Up" clickAction={() => navigate("/FirstReactProj/Signup")}/>
                <Padder/>
                <HighlightButton text="Log In" clickAction={() => navigate("/FirstReactProj/Login")}/>
            </div>
        </div>
    );

}

export default LandingPage;
