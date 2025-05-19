import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Home
    }
])