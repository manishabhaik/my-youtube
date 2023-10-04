import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import {
  FaHome,
  FaHotjar,
  FaCog,
  FaCut,
  FaExclamationCircle,
  FaVideo,
  FaHistory,
  FaRegClock,
  FaRegClone,
  FaLightbulb,
  FaThumbsUp,
  FaRegFileVideo,
  FaShoppingBag,
  FaMusic,
  FaBroadcastTower,
  FaTrophy,
  FaRegNewspaper,
  FaRegFlag,
  FaCommentAlt,
  FaGamepad,
  FaBook,
  FaMapMarked,
} from "react-icons/fa";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const toggleTheme = useSelector((store) => store.app.isDarkMode);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  // early return pattern
  if (isMenuOpen == false && videoId !== null) return null;
  if (!isMenuOpen)
    return (
      <div className="px-5 col-span-2 shadow-sm">
        <ul className="">
          <li
            className={`${
              toggleTheme ? "hover:bg-gray-700" : "hover:bg-gray-200"
            } py-4  cursor-pointer px-4 rounded-lg`}
          >
            <Link to="/" className="flex items-center flex-col">
              <span className="pr-4 pb-2 text-2xl">
                <FaHome />
              </span>
              <span className="text-sm">Home</span>
            </Link>
          </li>
          <li
            className={`${
              toggleTheme ? "hover:bg-gray-700" : "hover:bg-gray-200"
            } py-2  cursor-pointer px-4 rounded-lg`}
          >
            <Link className="flex items-center flex-col">
              <span className="pr-4 pb-2 text-2xl">
                <FaCut />
              </span>
              <span className="text-sm">Short</span>
            </Link>
          </li>
          <li
            className={`${
              toggleTheme ? "hover:bg-gray-700" : "hover:bg-gray-200"
            } py-4  cursor-pointer px-4 rounded-lg`}
          >
            <Link className="flex items-center flex-col">
              <span className="pr-4 pb-2 text-2xl">
                <FaRegFileVideo />
              </span>
              <span className="text-sm">Subscription</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  return (
    <div className="px-5 col-span-2 shadow-sm">
      <ul className="">
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link to="/" className="flex items-center flex-row">
            <span className="pr-4">
              <FaHome />
            </span>
            <span>Home</span>
          </Link>
        </li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link className="flex items-center flex-row">
            <span className="pr-4">
              <FaCut />
            </span>
            <span>Short</span>
          </Link>
        </li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link className="flex items-center flex-row">
            <span className="pr-4">
              <FaRegFileVideo />
            </span>
            <span>Subscription</span>
          </Link>
        </li>
      </ul>

      <hr className="my-2" />
      <ul>
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link className="flex items-center flex-row">
            <span className="pr-4">
              <FaBook />
            </span>
            <span>Library</span>
          </Link>
        </li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link className="flex items-center flex-row">
            <span className="pr-4">
              <FaHistory />
            </span>
            <span>History</span>
          </Link>
        </li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link className="flex items-center flex-row">
            <span className="pr-4">
              <FaRegClone />
            </span>
            <span>Your videos</span>
          </Link>
        </li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link className="flex items-center flex-row">
            <span className="pr-4">
              <FaLightbulb />
            </span>
            <span>Your courses</span>
          </Link>
        </li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link className="flex items-center flex-row">
            <span className="pr-4">
              <FaRegClock />
            </span>
            <span>Watch later</span>
          </Link>
        </li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link className="flex items-center flex-row">
            <span className="pr-4">
              <FaThumbsUp />
            </span>
            <span>Liked videos</span>
          </Link>
        </li>
      </ul>
      <hr className="my-2" />
      <h1 className="font-medium pb-2">Explore</h1>
      <ul>
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link className="flex items-center flex-row">
            <span className="pr-4">
              <FaHotjar />
            </span>
            <span>Trending</span>
          </Link>
        </li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link className="flex items-center flex-row">
            <span className="pr-4">
              <FaShoppingBag />
            </span>
            <span>Shoping</span>
          </Link>
        </li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link className="flex items-center flex-row">
            <span className="pr-4">
              <FaMusic />
            </span>
            <span>Music</span>
          </Link>
        </li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link className="flex items-center flex-row">
            <span span className="pr-4">
              <FaVideo />
            </span>
            <span>Movie</span>
          </Link>
        </li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link className="flex items-center flex-row">
            <span span className="pr-4">
              <FaBroadcastTower />
            </span>
            <span>Live</span>
          </Link>
        </li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link className="flex items-center flex-row">
            <span className="pr-4">
              <FaGamepad />
            </span>
            <span>Gaming</span>
          </Link>
        </li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link className="flex items-center flex-row">
            <span className="pr-4">
              <FaRegNewspaper />
            </span>
            <span>News</span>
          </Link>
        </li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link className="flex items-center flex-row">
            <span className="pr-4">
              <FaTrophy />
            </span>
            <span>Sports</span>
          </Link>
        </li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link className="flex items-center flex-row">
            <span className="pr-4">
              <FaLightbulb />
            </span>
            <span>Learning</span>
          </Link>
        </li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link className="flex items-center flex-row">
            <span className="pr-4">
              <FaMapMarked />
            </span>
            <span>Fashion & Beauty</span>
          </Link>
        </li>
      </ul>
      <hr className="my-2" />
      <h1 className="font-medium py-5">Subscribtions</h1>
      <ul>
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link className="flex items-center flex-row">
            <span className="pr-4">
              <FaMusic />
            </span>
            <span>Music</span>
          </Link>
        </li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link className="flex items-center flex-row">
            <span className="pr-4">
              <FaTrophy />
            </span>
            <span>Sports</span>
          </Link>
        </li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link className="flex items-center flex-row">
            <span className="pr-4">
              <FaGamepad />
            </span>
            <span>Gaming</span>
          </Link>
        </li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link className="flex items-center flex-row">
            <span className="pr-4">
              <FaVideo />
            </span>
            <span>Movies</span>
          </Link>
        </li>
      </ul>
      <hr className="my-2" />
      <ul>
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link className="flex items-center flex-row">
            <span className="pr-4">
              <FaCog />
            </span>
            <span>Setting</span>
          </Link>
        </li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link className="flex items-center flex-row">
            <span className="pr-4">
              <FaRegFlag />
            </span>
            <span>Report history</span>
          </Link>
        </li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link className="flex items-center flex-row">
            <span className="pr-4">
              <FaExclamationCircle />
            </span>
            <span>Help</span>
          </Link>
        </li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer px-4 rounded-lg">
          <Link className="flex items-center flex-row">
            <span className="pr-4">
              <FaCommentAlt />
            </span>
            <span>Send Feedback</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
