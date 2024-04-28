import { RouterProvider, createBrowserRouter } from "react-router-dom";

import DefaultLayout from "./ui/layouts/defaultLayout";
import Dashboard from "./ui/pages/Dashboard";
import About from "./ui/pages/About";
import Product from "./ui/pages/Product";

const BrowserRoutes = createBrowserRouter([
    {
        path:"/",
        element:<DefaultLayout/>,
        children:[
            {
                path: "",
                element: <Dashboard />,
              },
              {
                path: "product",
                element: <Product />,
              },
              {
                path: "about",
                element: <About />,
              },
        ]
    }
]);

const Router = ()=>{
    return <RouterProvider router={BrowserRoutes}/>;
}
export default Router;