import HighlightButton from "../components/HighlightButton.jsx";
import Padder from "../components/padder.jsx";
import Wallpaper from "../components/Wallpaper.jsx";
import Header from "../components/Header.jsx";
//import "./HomePage.css"
import {useNavigate} from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import AnnouncementContent from "../components/AnnouncementContent.jsx";


function HomePage() {

    const navigate = useNavigate();

    return (

        <div className="App">
            <Header className="header" menu = {true}/>
            <Wallpaper className="wallpaper"/>
            <Sidebar className = "sidebar"/>

            <AnnouncementContent className = "announcementContent"/>
        </div>
    );

}

export default HomePage;
