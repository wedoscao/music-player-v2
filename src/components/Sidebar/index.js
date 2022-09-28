import { faHouse, faBook, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [active, setActive] = useState("home");
    const [previousActive, setPreviousActive] = useState();
    useEffect(() => {
        if (previousActive) {
            document.getElementById(previousActive).style = "";
        }
        document.getElementById(active).style = "background-color: #666; color: white";
        setPreviousActive(active);
    }, [active]);
    return (
        <div className="w-56 min-h-screen bg-neutral-800 fixed top-16 ml-1">
            <div className="leading-10">
                <Link to="/">
                    <div
                        className="h-14 flex items-center pl-6 cursor-pointer hover:text-white"
                        id="home"
                        onClick={(e) => setActive(e.currentTarget["id"])}
                    >
                        <FontAwesomeIcon icon={faHouse} />
                        <span className="pl-2">Home</span>
                    </div>
                </Link>
                <Link to="/library">
                    <div
                        className="h-14 flex items-center pl-6 cursor-pointer hover:text-white"
                        id="library"
                        onClick={(e) => setActive(e.currentTarget["id"])}
                    >
                        <FontAwesomeIcon icon={faBook} />
                        <span className="pl-2">Library</span>
                    </div>
                </Link>
                <Link to="/create-playlist">
                    <div
                        className="h-14 flex items-center pl-6 cursor-pointer hover:text-white"
                        id="create-playlist"
                        onClick={(e) => setActive(e.currentTarget["id"])}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                        <span className="pl-2">Create Playlist</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}
