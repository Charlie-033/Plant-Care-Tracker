import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home";
import RootLayout from "../Layout/RootLayout";
import AllPlants from "../Components/Navbar/AllPlants";
import Register from "../Components/Navbar/Register";
import Login from "../Components/Navbar/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "allplants",
        element: <AllPlants />,
      },
      {
        path: "auth",
        children: [
          {
            path: "register",
            element: <Register />,
          },
          {
            path: 'login',
            element: <Login/>
          }
        ],
      },
    ],
  },
]);
