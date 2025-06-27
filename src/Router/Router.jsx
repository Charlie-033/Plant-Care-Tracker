import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home";
import RootLayout from "../Layout/RootLayout";
import AllPlants from "../Components/Navbar/AllPlants";
import Register from "../Components/Navbar/Register";
import Login from "../Components/Navbar/Login";
import AddPlants from "../Components/Navbar/AddPlants";
import MyPlants from "../Components/Navbar/MyPlants";
import PrivateRoute from "../Provider/PrivateRoute";
import PlantDetails from "../Components/Pages/PlantDetails";
import UpdatePlant from "../Components/Pages/UpdatePlant";
import Errorpage from "../Components/Pages/Errorpage";
import AboutUs from "../Components/Pages/AboutUs";
import Blog from "../Components/Pages/Blog";
import Support from "../Components/Pages/Support";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardHome from "../Components/Pages/DashboardHome";
import Plants from "../Components/Pages/Plants";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "allplants",
        element: <Plants/>,
      },
      {
        path: 'plants/:id',
        loader: ({params}) => fetch(`https://plant-care-tracker-s.vercel.app/plants/${params.id}`),
        element: <PrivateRoute>
            <PlantDetails/>
        </PrivateRoute>
      },
      {
        path: 'updateplant/:id',
        loader: ({params}) => fetch(`https://plant-care-tracker-s.vercel.app/plants/${params.id}`),
        element: <PrivateRoute>
            <UpdatePlant/>
        </PrivateRoute>
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
      {
        path: 'about-us',
        element: <AboutUs/>
      },
      {
        path: 'blog',
        element: <Blog/>
      },
      {
        path: 'support',
        element: <Support/>
      }
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
    children: [
      {
        index: true,
        element: <DashboardHome/>
      },
      {
        path: "allplants",
        element: <AllPlants />
      },
      {
        path: 'addplant',
        element: <PrivateRoute>
            <AddPlants/>
        </PrivateRoute>
      },
      {
        path: 'myplants',
        element: <PrivateRoute>
          <MyPlants/>
        </PrivateRoute>
      },
    ]
  },
  {
    path: "*",
    element: <Errorpage/>
  }
]);
