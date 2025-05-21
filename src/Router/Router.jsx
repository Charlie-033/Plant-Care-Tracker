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
        element: <AllPlants />,
      },
      {
        path: 'plants/:id',
        loader: ({params}) => fetch(`http://localhost:3001/plants/${params.id}`),
        element: <PrivateRoute>
            <PlantDetails/>
        </PrivateRoute>
      },
      {
        path: 'addplant',
        element: <PrivateRoute>
            <AddPlants/>
        </PrivateRoute>
      },
      {
        path: 'updateplant/:id',
        loader: ({params}) => fetch(`http://localhost:3001/plants/${params.id}`),
        element: <PrivateRoute>
            <UpdatePlant/>
        </PrivateRoute>
      },
      {
        path: 'myplants',
        element: <PrivateRoute>
          <MyPlants/>
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
    ],
  },
]);
