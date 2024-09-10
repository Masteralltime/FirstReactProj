import './AnnouncementThumbnail.css';

// eslint-disable-next-line react/prop-types
function AnnouncementThumbnail({key}) {
    return (
        <div className="announcementThumbnail">
            <h2 className="announcementTitle">Announcement Title</h2>
            <p>{"This is an announcement. " + key}</p>
        </div>
    );
}

export default AnnouncementThumbnail;