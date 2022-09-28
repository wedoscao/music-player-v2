export default function Footer({ songs }) {
    console.log(songs);
    return (
        <div className="fixed left-0 right-0 bottom-0 text-slate-300 bg-black h-24">
            <div id="thumbnail">
                <img src={songs[1].thumbnail} alt=""></img>
            </div>
        </div>
    );
}
