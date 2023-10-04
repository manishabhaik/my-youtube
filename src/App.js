import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { useSelector } from 'react-redux';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchVideo from "./components/WatchVideo";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchVideo />,
      },
    ],
  },
]);
function App() {
const toggleTheme = useSelector((store) => store.app.isDarkMode);
  return (
    <div
      className={`${
        toggleTheme ? "dark" : "light"
      } mode-container`}
    >
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
