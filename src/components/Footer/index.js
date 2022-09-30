import { faBackward, faForward, faPlay, faPause, faVolumeDown, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Footer({ songs, currentSong = 0 }) {
    const [song, setSong] = useState(currentSong);
    const [playing, setPlaying] = useState(false);
    const [isFirst, setIsFirst] = useState(true);
    const [volume, setVolume] = useState(1);
    const [songProgress, setSongProgress] = useState(0);

    const handleToggleBtn = () => {
        if (playing) document.querySelector("#audio").pause();
        else document.querySelector("#audio").play();
        setPlaying(!document.querySelector("#audio").paused);
    };

    const handlePrevBtn = () => {
        if (song === 0) setSong(songs.length - 1);
        else setSong(song - 1);
    };

    const handleNextBtn = () => {
        if (song === songs.length - 1) setSong(0);
        else setSong(song + 1);
    };

    const handleProgressBar = () => {
        const progress = Math.floor(
            (document.querySelector("#audio").currentTime / document.querySelector("#audio").duration) * 100,
        );
        if (progress === 100) {
            handleNextBtn();
        }
        setSongProgress(progress);
    };

    const handleSeeking = (e) => {
        let currentTime = (document.querySelector("#audio").duration * e.target.value) / 100;
        document.querySelector("#audio").currentTime = currentTime;
    };

    const handleChangingVolume = () => {
        setVolume(document.querySelector("#volumeBar").value / 100);
        document.querySelector("#audio").volume = volume;
    };

    useEffect(() => {
        if (isFirst) setIsFirst(false);
        else {
            if (playing) document.querySelector("#audio").play();
            else handleToggleBtn();
        }
    }, [song]);

    useEffect(() => {
        document.querySelector("#audio").addEventListener("timeupdate", handleProgressBar);

        return () => {
            document.querySelector("#audio").removeEventListener("timeupdate", handleProgressBar);
        };
    }, []);

    return (
        <div className="fixed left-0 right-0 bottom-0 text-slate-300 bg-black h-24 flex items-center">
            <div id="playing-info" className="flex justify-center items-center ml-4 w-60">
                <div id="thumbnail" className="inline-block">
                    <img src={songs[song].thumbnail} alt="" className="w-20 h-20"></img>
                </div>
                <div id="name" className="inline-block ml-4">
                    {songs[song].name}
                </div>
            </div>
            <div id="control" className="grow flex justify-center">
                <audio id="audio" src={songs[song].music} className="w-96 text-white">
                    Your browser does not support the audio tag.
                </audio>
                <div id="control-btn" className="text-white flex justify-center">
                    <div id="prev" className="mr-4 pl-2 pr-2 hover:opacity-50 cursor-pointer">
                        <FontAwesomeIcon icon={faBackward} onClick={handlePrevBtn} />
                    </div>
                    <div id="toggle" className="pl-2 pr-2 hover:opacity-50 cursor-pointer" onClick={handleToggleBtn}>
                        <FontAwesomeIcon icon={playing ? faPause : faPlay} />
                    </div>
                    <div id="next" className="ml-4 pl-2 pr-2 hover:opacity-50 cursor-pointer" onClick={handleNextBtn}>
                        <FontAwesomeIcon icon={faForward} />
                    </div>
                </div>
                <div id="progress" className="ml-2">
                    <input
                        id="progressBar"
                        type="range"
                        value={songProgress}
                        step="1"
                        min="0"
                        max="100"
                        className="w-96 outline-none h-2 appearance-none"
                        onChange={handleSeeking}
                    />
                </div>
            </div>
            <div id="options" className="flex justify-center items-center ml-4 w-60">
                <div id="volumeOption" className="flex items-center">
                    <div id="volumeIcon" className="pr-2">
                        <FontAwesomeIcon icon={volume >= 0.5 ? faVolumeHigh : faVolumeDown} />
                    </div>
                    <input
                        id="volumeBar"
                        type="range"
                        value={volume * 100}
                        step="1"
                        min="0"
                        max="100"
                        className="w-40 outline-none h-2 cursor-pointer"
                        onChange={handleChangingVolume}
                    ></input>
                </div>
            </div>
        </div>
    );
}
