import './Sidebar.css';
import AnnouncementThumbnail from "./AnnouncementThumbnail.jsx";

function Sidebar() {

    return (
        <div className="sidebar">
            <div className="sidebarTitleContainer"><h1 className="sidebarTitle">Announcements</h1></div>
            {Array(15).fill(undefined, undefined, undefined).map((_, i) => <AnnouncementThumbnail className="announcementButton" key={i}/>)}
        </div>
    );

}

export default Sidebar;