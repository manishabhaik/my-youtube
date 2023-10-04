import { useSelector } from "react-redux";

const Button = ({name}) => {
  const toggleTheme = useSelector((store) => store.app.isDarkMode);
  return (
    <div>
      <button className={`${toggleTheme ? "bg-gray-700 border-gray-500":"bg-gray-200 border-gray-200"}  px-3 py-1 m-2 rounded-md `}>
        {name}
      </button>
    </div>
  );
}

export default Button
