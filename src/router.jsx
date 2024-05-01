import { RouterProvider, createBrowserRouter } from "react-router-dom";

import DefaultLayout from "./ui/layouts/defaultLayout";
import Dashboard from "./ui/views/Dashboard";
import About from "./ui/views/About";
import Product from "./ui/views/Product";
import Login from "./ui/views/Login";
import SignUp from "./ui/views/SignUp";
import GuestLayout from "./ui/layouts/guestLayout";
import Customer from "./ui/views/customers/Customer";
const BrowserRoutes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
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
      {
        path: "customer",
        element: <Customer />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={BrowserRoutes} />;
};
export default Router;
