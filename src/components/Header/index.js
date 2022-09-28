import { faArrowLeft, faArrowRight, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
    return (
        <div className="items-center bg-black fixed w-full h-16 flex top-0">
            <div id="navigation" className="h-full flex items-center justify-center w-56 text-xl">
                <div className="navigation__icon inline pr-4 pl-4 pt-2 pb-2 hover:bg-slate-500 hover:text-white cursor-pointer">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <div className="navigation__icon inline pr-4 pl-4 pt-2 pb-2 ml-4 hover:bg-slate-500 hover:text-white cursor-pointer">
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
            <div id="search" className="grow flex justify-center items-center">
                <div className="search__icon text-2xl inline pr-4 pl-4 pt-2 pb-2 mr-4 hover:text-white cursor-pointer">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <input className="outline-1 text-black rounded-xl h-8 w-96"></input>
            </div>
        </div>
    );
}
