import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./Login/login";
import NotFound from "./NotFound";

import Landig from "./pages/LandigPage";


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
    path: "*",
    element: <NotFound />,
  },
]);

export default function Router() {
  return <RouterProvider router={routes} />;
}
