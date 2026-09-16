import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import App from "./App";
import { Children } from "react";

const routes = [

    {
        path: "/",
        element: <App />,
        children: [

            {
                index: true,
                element: <Home />,

            },

            {
                path: "shop",
                element: <Shop />,

            },

            {

                path: "cart",
                element: <Cart />,
            }
        ]

    }
]

export default routes;