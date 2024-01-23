import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login/login";
import NotFound from "./pages/NotFound";

import Landig from "./pages/LandigPage";
import Action from "./pages/Action";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Landig />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Home",
    element: <Homepage />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "action",
    element: <Action />,
  },
]);

export default function Router() {
  return <RouterProvider router={routes} />;
}
