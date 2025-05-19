import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home";
import RootLayout from "../Layout/RootLayout";
import AllPlants from "../Components/Navbar/AllPlants";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'allplants',
                element: <AllPlants/>
            }
        ]
    }
])