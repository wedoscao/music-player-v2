import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import CreatePlaylist from "./pages/CreatePlaylist";
import Library from "./pages/Library";
import Footer from "./components/Footer";
import Header from "./components/Header";
import songs from "./data/songs";

export default function App() {
    return (
        <Fragment>
            <div className="text-slate-300 bg-black">
                <Header />
                <Sidebar />
                <Routes>
                    <Route exact path="/" element={<Home />} />

                    <Route path="/create-playlist" element={<CreatePlaylist />} />

                    <Route path="/library" element={<Library />} />
                </Routes>
            </div>
            <Footer songs={songs} />
        </Fragment>
    );
}
