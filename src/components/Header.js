import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, toggleAppTheme } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";
import {
  FaSearch,
  FaBell,
  FaMicrophoneAlt,
  FaUserAlt,
  FaVideo,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryList, setSearchQueryList] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(true);

  const searchCache = useSelector((store)=>store.search);
  const toggleTheme = useSelector(store=>store.app.isDarkMode);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleAppTheme=()=>{
    dispatch(toggleAppTheme());
  }
  useEffect(() => {
    // make an api call after every key press
    // but if diffrence between two key strocks is <200 decline api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
         setSearchQueryList(searchCache[searchQuery]);
      } else {
         getSuggestions();
      }

    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggestions = async () => {
    const data = await fetch(SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchQueryList(json[1]);

    //diospatch an action
    dispatch(cacheResults({[searchQuery]:json[1]}));
  };
  return (
    <div className="grid grid-flow-col p-2 mb-2 shadow-md">
      <div className="flex col-span-2">
        <img
          onClick={toggleMenuHandler}
          className="h-10 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png"
          alt="menu"
        />
        <img
          className="h-10 cursor-pointer"
          src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg"
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-8 px-9 flex">
        <input
          className={`${
            toggleTheme
              ? "bg-[#222222] border border-gray-500"
              : "bg-white border border-slate-300"
          }  w-1/2 rounded-l-full placeholder:italic placeholder:text-slate-400 block rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-blue-300 focus:ring-blue-300 focus:ring-1 sm:text-sm `}
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        />
        <button
          className={`${
            toggleTheme
              ? "bg-gray-700 border border-gray-500"
              : "bg-gray-200 border border-gray-300"
          }  px-6 py-[10px] rounded-r-full`}
        >
          <FaSearch />
        </button>
        {showSuggestion && searchQueryList.length > 0 && (
          <div className="py-2 mx-2 w-[33rem] bg-white rounded-lg border border-gray-300 shadow absolute">
            <ul>
              {searchQueryList &&
                searchQueryList.map((txt) => (
                  <li
                    className="px-5 py-2 hover:bg-slate-200 rounded"
                    key={txt}
                  >
                    <FaSearch /> {txt}
                  </li>
                ))}
            </ul>
          </div>
        )}
        <div
          className={`${
            toggleTheme ? "bg-gray-700" : "bg-gray-200"
          } p-3 mx-3 my-auto  rounded-full`}
        >
          <span>
            <FaMicrophoneAlt />
          </span>
        </div>
      </div>
      <div className="col-span-2 flex justify-around text-xl pt-2 cursor-pointer items-center">
        <span
          className={`${
            toggleTheme ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }  p-2 hover:rounded-full`}
        >
          {!toggleTheme ? (
            <FaSun onClick={handleAppTheme} />
          ) : (
            <FaMoon onClick={handleAppTheme} />
          )}
        </span>
        <span
          className={`${
            toggleTheme ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }  p-2 hover:rounded-full`}
        >
          <FaVideo />
        </span>
        <span
          className={`${
            toggleTheme ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }  p-2 hover:rounded-full`}
        >
          <FaBell />
        </span>
        <span
          className={`${
            toggleTheme ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }  p-2 hover:rounded-full`}
        >
          <FaUserAlt />
        </span>
      </div>
    </div>
  );
};

export default Header;
